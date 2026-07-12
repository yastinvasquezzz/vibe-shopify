const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env file manually
const envPath = path.join(__dirname, '..', '.env');
let supabaseUrl = '';
let supabaseAnonKey = '';

try {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  lines.forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      if (key === 'VITE_SUPABASE_URL') supabaseUrl = val;
      if (key === 'VITE_SUPABASE_PUBLISHABLE_KEY') supabaseAnonKey = val;
    }
  });
} catch (err) {
  console.error('Error reading .env file:', err);
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing environment variables! URL:', supabaseUrl, 'Key:', supabaseAnonKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log('Connecting to Supabase...');
  try {
    const { data: users, error } = await supabase.from('users').select('*');
    if (error) throw error;
    
    console.log('Users in public.users table:');
    if (!users || users.length === 0) {
      console.log('No users found in public.users table.');
    } else {
      users.forEach(u => {
        console.log(`- Email: ${u.email}, Name: ${u.full_name}, Role: ${u.role}, Password: ${u.password}`);
      });
    }
  } catch (err) {
    console.error('Error querying users:', err);
  }
}

run();
