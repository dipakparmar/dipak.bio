alter table "public"."links"
  add constraint "links_section_id_fkey"
  foreign key ("section_id")
  references "public"."link_section"
  ("id") on update cascade on delete set null;
