import { definePlugin } from 'sanity';

export const customTheme = definePlugin({
  name: 'custom-theme',
  studio: {
    components: {
      layout: (props) => {
        // Use JavaScript to directly manipulate styles
        if (typeof document !== 'undefined') {
          setTimeout(() => {
            // Find all navigation items
            const applyHoverListeners = () => {
              const items = document.querySelectorAll('[data-ui="Flex"][role="button"], [data-as="li"] > [data-ui="Flex"], [data-ui="Card"]');
              
              items.forEach((item) => {
                const element = item as HTMLElement;
                
                // Mouse enter - force white text
                element.addEventListener('mouseenter', () => {
                  element.style.backgroundColor = '#8B5CF6';
                  element.style.borderRadius = '6px';
                  
                  // Force all child text elements to white
                  const textElements = element.querySelectorAll('*');
                  textElements.forEach((child) => {
                    (child as HTMLElement).style.color = '#ffffff';
                  });
                });
                
                // Mouse leave - remove inline styles
                element.addEventListener('mouseleave', () => {
                  if (!element.hasAttribute('aria-selected') && !element.hasAttribute('data-selected')) {
                    element.style.backgroundColor = '';
                    element.style.borderRadius = '';
                    
                    const textElements = element.querySelectorAll('*');
                    textElements.forEach((child) => {
                      (child as HTMLElement).style.color = '';
                    });
                  }
                });
              });
            };
            
            // Apply initially
            applyHoverListeners();
            
            // Re-apply when DOM changes
            const observer = new MutationObserver(() => {
              applyHoverListeners();
            });
            
            observer.observe(document.body, {
              childList: true,
              subtree: true,
            });
          }, 1000);
          
          // Also inject CSS as fallback
          const styleId = 'custom-sanity-theme';
          if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
              /* Fallback CSS */
              [data-ui="Flex"][role="button"]:hover,
              [data-as="li"] > [data-ui="Flex"]:hover,
              li:hover > [data-ui="Flex"] {
                background-color: #8B5CF6 !important;
              }
              
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"],
              li[aria-selected="true"] > [data-ui="Flex"] {
                background-color: #7C3AED !important;
              }
            `;
            document.head.appendChild(style);
          }
        }
        
        return props.renderDefault(props);
      },
    },
  },
});
