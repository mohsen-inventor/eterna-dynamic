import { definePlugin } from 'sanity';

export const fixedTitle = definePlugin({
  name: 'fixed-title',
  studio: {
    components: {
      layout: (props) => {
        // Override document title
        if (typeof document !== 'undefined') {
          // Set initial title
          document.title = 'Content | EternaCloud';
          
          // Create a MutationObserver to watch for title changes
          const observer = new MutationObserver(() => {
            if (document.title !== 'Content | EternaCloud') {
              document.title = 'Content | EternaCloud';
            }
          });
          
          // Observe the title element
          const titleElement = document.querySelector('title');
          if (titleElement) {
            observer.observe(titleElement, {
              childList: true,
              characterData: true,
              subtree: true,
            });
          }
        }
        
        return props.renderDefault(props);
      },
    },
  },
});

