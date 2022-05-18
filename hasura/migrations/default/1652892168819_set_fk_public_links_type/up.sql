alter table "public"."links"
  add constraint "links_type_fkey"
  foreign key ("type")
  references "public"."link_type"
  ("name") on update restrict on delete restrict;
