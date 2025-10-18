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
              // 1. Site Info
              S.listItem()
                .title('1. Site Info')
                .icon(InfoOutlineIcon)
                .child(
                  S.document()
                    .schemaType('siteInfo')
                    .documentId('siteInfo')
                ),
              
              // 2. Header & Navigation
              S.listItem()
                .title('2. Header & Navigation')
                .icon(DesktopIcon)
                .child(
                  S.document()
                    .schemaType('headerSettings')
                    .documentId('headerSettings')
                ),
              
              // 3. Main Menu
              S.listItem()
                .title('3. Main Menu')
                .icon(MenuIcon)
                .child(
                  S.document()
                    .schemaType('mainMenu')
                    .documentId('mainMenu')
                ),
              
              // 4. Footer
              S.listItem()
                .title('4. Footer')
                .icon(LinkIcon)
                .child(
                  S.document()
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                ),
              
              // 5. SEO & Meta
              S.listItem()
                .title('5. SEO & Meta')
                .icon(SearchIcon)
                .child(
                  S.document()
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
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
              // 1. Hero Section
              S.listItem()
                .title('1. Hero Section')
                .icon(RocketIcon)
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                ),
              
              // 2. Services Section
              S.listItem()
                .title('2. Services Section')
                .icon(ComponentIcon)
                .child(
                  S.document()
                    .schemaType('servicesSection')
                    .documentId('servicesSection')
                ),
              
              // 3. Solutions Section
              S.listItem()
                .title('3. Solutions Section')
                .icon(BulbOutlineIcon)
                .child(
                  S.document()
                    .schemaType('solutionsSection')
                    .documentId('solutionsSection')
                ),
              
              // 4. Process Section
              S.listItem()
                .title('4. Process Section')
                .icon(ActivityIcon)
                .child(
                  S.document()
                    .schemaType('processSection')
                    .documentId('processSection')
                ),
            ])
        ),
    ]);
