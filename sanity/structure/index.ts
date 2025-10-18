import { StructureBuilder } from 'sanity/structure';
import { 
  CogIcon, 
  HomeIcon, 
  DocumentIcon,
  ImageIcon,
  DesktopIcon,
  MenuIcon,
  LinkIcon,
  SearchIcon,
  ShareIcon,
  RocketIcon,
  ComponentIcon,
  BulbOutlineIcon,
  ActivityIcon,
  InfoOutlineIcon
} from '@sanity/icons';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // ============================================
      // GLOBAL SETTINGS
      // ============================================
      S.listItem()
        .title('Global Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Global Settings')
            .items([
              // Site Info
              S.listItem()
                .title('Site Info')
                .icon(InfoOutlineIcon)
                .child(
                  S.document()
                    .schemaType('siteInfo')
                    .documentId('siteInfo')
                ),
              
              // SEO & Meta
              S.listItem()
                .title('SEO & Meta')
                .icon(SearchIcon)
                .child(
                  S.document()
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
                ),
              
              // Page Header
              S.listItem()
                .title('Page Header')
                .icon(DesktopIcon)
                .child(
                  S.document()
                    .schemaType('headerSettings')
                    .documentId('headerSettings')
                ),
              
              // Main Menu
              S.listItem()
                .title('Main Menu')
                .icon(MenuIcon)
                .child(
                  S.document()
                    .schemaType('mainMenu')
                    .documentId('mainMenu')
                ),
              
              // Page Footer
              S.listItem()
                .title('Page Footer')
                .icon(LinkIcon)
                .child(
                  S.document()
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                ),
            ])
        ),
      
      S.divider(),
      
      // ============================================
      // HOME PAGE
      // ============================================
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Home Page Sections')
            .items([
              // Hero Section
              S.listItem()
                .title('Hero Section')
                .icon(RocketIcon)
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                ),
              
              // Services Section
              S.listItem()
                .title('Services Section')
                .icon(ComponentIcon)
                .child(
                  S.document()
                    .schemaType('servicesSection')
                    .documentId('servicesSection')
                ),
              
              // Solutions Section
              S.listItem()
                .title('Solutions Section')
                .icon(BulbOutlineIcon)
                .child(
                  S.document()
                    .schemaType('solutionsSection')
                    .documentId('solutionsSection')
                ),
              
              // Process Section
              S.listItem()
                .title('Process Section')
                .icon(ActivityIcon)
                .child(
                  S.document()
                    .schemaType('processSection')
                    .documentId('processSection')
                ),
            ])
        ),
    ]);
