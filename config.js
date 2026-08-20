// ══════════════════════════════════════════════
// DevVault — Config
// Fill in your Supabase project URL + anon key
// ══════════════════════════════════════════════

const SUPABASE_URL = 'https://wrfpfibxiufnunhfuofg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZnBmaWJ4aXVmbnVuaGZ1b2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNjExMDksImV4cCI6MjEwMjYzNzEwOX0.sAqk91WtVPGjMCMsH2ja56tNHFbzLCzUcdW3FJimgP4';

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
