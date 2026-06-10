import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import nav from "lume/plugins/nav.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import base_path from "lume/plugins/base_path.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";

const site = lume({
  location: new URL("https://multitoolforge.org/"),
});

site.add("styles.css");
site.copy("assets/");
site.use(tailwindcss());
site.use(attributes());
site.use(code_highlight());
site.use(nav());
site.use(base_path());
site.use(resolve_urls());
site.use(slugify_urls());

export default site;
