
-- Enable RLS on waitlist_signups table if not already enabled
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into waitlist_signups
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading waitlist signups (optional, for admin purposes)
CREATE POLICY "Anyone can view waitlist signups" 
  ON public.waitlist_signups 
  FOR SELECT 
  USING (true);
