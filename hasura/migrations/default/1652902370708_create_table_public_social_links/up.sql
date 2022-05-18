CREATE TABLE "public"."social_links" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL, "position" integer NOT NULL DEFAULT 0, "url" text NOT NULL, "active" boolean NOT NULL DEFAULT false, "account_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("type") REFERENCES "public"."social_link_type"("name") ON UPDATE cascade ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_social_links_updated_at"
BEFORE UPDATE ON "public"."social_links"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_social_links_updated_at" ON "public"."social_links" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
