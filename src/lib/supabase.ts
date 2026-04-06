import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xtxnozqhbarhfbctunbi.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gJddb1awshejt_krCR9teQ_dlfrtnS4'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey
)