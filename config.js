// ══════════════════════════════════════════════
// DevVault — Config
// Fill in your Supabase project URL + anon key
// ══════════════════════════════════════════════

const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

// Allowed file types for upload
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
  'application/json',
  'application/x-yaml',
  'text/yaml',
  'text/plain',
  'text/markdown',
  'text/html',
  'text/css',
  'text/x-shellscript',
  'application/javascript',
  'application/typescript',
  'text/x-python',
  'text/x-rust',
  'text/x-go',
  'text/x-sql',
  'application/x-sql'
];

// Max file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Max uploads per contributor per day
const MAX_UPLOADS_PER_DAY = 5;
