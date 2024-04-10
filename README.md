App Routing Conventions:
Define routes and handle metadata using the following file conventions within the app folder:
layout.js/.jsx/.tsx: Layout page.
loading.js/.jsx/.tsx: Loading UI.
not-found.js/.jsx/.tsx: Not found UI.
error.js/.jsx/.tsx: Error UI.
global-error.js/.jsx/.tsx: Global error UI.
route.js/.ts: API endpoint template.
re-rendered.js/.jsx/.tsx: Re-rendered layout.
default.js/.jsx/.tsx: Parallel route fallback page.

Route Groups and Private Folders:
Group routes without affecting routing using (folder).
Opt a folder and all child segments out of routing with \_folder.

Metadata File Conventions:
Define metadata files for app icons, Open Graph images, Twitter images, SEO, etc.

Metadata file conventions in Next.js allow you to define metadata for your application. These conventions help you set up essential information that affects how your app appears and behaves. Let’s explore the different ways to handle metadata:

Config-based Metadata:
You can export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.
This approach allows you to define metadata directly in your code, making it easy to manage and customize.
Use this method when you want to set metadata for specific pages or layouts1.
File-based Metadata:
File-based metadata involves adding special metadata files to route segments.
Each file convention can be defined using either a static file (e.g., opengraph-image.jpg) or a dynamic variant generated through code (e.g., opengraph-image.js).
Once a file is defined, Next.js automatically serves it (with hashes in production for caching) and updates relevant head elements with correct metadata, such as the asset’s URL, file type, and image size.
Here are some specific metadata file conventions:
Favicon, Icon, and Apple Icon: Set icons for your application, which appear in web browser tabs, phone home screens, and search engine results2.
manifest.json: Configure web app settings like display mode, background color, and icons.
Open Graph Image and Twitter Image: Define images for social sharing and previews.
robots.txt: Control web crawlers’ access to your site.
sitemap.xml: Specify the structure of your site for search engines.
Remember that metadata plays a crucial role in enhancing user experience and search engine optimization. By following these conventions, you can ensure that your Next.js app provides the right information to users and search engines alike.
