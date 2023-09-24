import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qwpqhfvjvbzxwgovbape.supabase.co';

export default createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON);
