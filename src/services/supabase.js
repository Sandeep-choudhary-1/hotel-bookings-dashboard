import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ygrhqgykxvcdjcpwwpoq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncmhxZ3lreHZjZGpjcHd3cG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0ODc1ODYsImV4cCI6MjAzMjA2MzU4Nn0.KQkCgxP1HJHWL19e-Z7sJZWtdBcmfIpDSgrJr7v77W0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
