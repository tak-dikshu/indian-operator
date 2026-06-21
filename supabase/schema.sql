-- Supabase Schema for Indian Operator Landing Page

CREATE TABLE site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hero_headline text NOT NULL,
  hero_subhead text NOT NULL,
  stats jsonb NOT NULL, -- { subscribers, views, videos }
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE channels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL, -- 'youtube' | 'telegram' | 'whatsapp'
  url text NOT NULL,
  label text NOT NULL,
  member_count text,
  is_primary boolean DEFAULT false
);

CREATE TABLE videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  thumbnail_url text NOT NULL,
  video_url text NOT NULL,
  published_at timestamptz NOT NULL,
  views int DEFAULT 0
);

CREATE TABLE live_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_live boolean DEFAULT false,
  title text,
  started_at timestamptz
);

CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  quote text NOT NULL,
  avatar_url text,
  published boolean DEFAULT false
);

CREATE TABLE push_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint text NOT NULL UNIQUE,
  keys jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- RLS Policies
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE live_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read channels" ON channels FOR SELECT USING (true);
CREATE POLICY "Public read videos" ON videos FOR SELECT USING (true);
CREATE POLICY "Public read live_status" ON live_status FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (published = true);

-- Insert only for push subscriptions
CREATE POLICY "Public insert push_subscriptions" ON push_subscriptions FOR INSERT WITH CHECK (true);
