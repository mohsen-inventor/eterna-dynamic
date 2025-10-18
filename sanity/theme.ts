import { definePlugin } from 'sanity';

export const customTheme = definePlugin({
  name: 'custom-theme',
  studio: {
    components: {
      layout: (props) => {
        // Inject custom CSS for purple hover and active states
        if (typeof document !== 'undefined') {
          const styleId = 'custom-sanity-theme';
          
          if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
              /* Structure navigation items - FORCE white text on hover */
              
              /* HOVER: Purple background */
              [data-ui="Flex"][role="button"]:hover,
              [data-as="li"] [data-ui="Flex"]:hover,
              [data-ui="Card"]:hover {
                background-color: #8B5CF6 !important;
                border-radius: 6px !important;
              }
              
              /* HOVER: FORCE white text - Maximum specificity to override sky color */
              [data-ui="Flex"][role="button"]:hover[data-ui="Flex"][role="button"]:hover * {
                color: #ffffff !important;
              }
              
              [data-as="li"] [data-ui="Flex"]:hover[data-as="li"] [data-ui="Flex"]:hover * {
                color: #ffffff !important;
              }
              
              [data-ui="Card"]:hover[data-ui="Card"]:hover * {
                color: #ffffff !important;
              }
              
              /* Extra aggressive - target Text component directly */
              [data-ui="Flex"]:hover [data-ui="Text"],
              [data-ui="Card"]:hover [data-ui="Text"],
              [data-ui="Flex"]:hover span,
              [data-ui="Card"]:hover span,
              [data-ui="Flex"]:hover p,
              [data-ui="Card"]:hover p,
              [data-ui="Flex"]:hover div,
              [data-ui="Card"]:hover div {
                color: #ffffff !important;
              }
              
              /* Override any accent colors (sky blue, etc.) */
              [data-ui="Flex"]:hover [data-ui="Text"][data-tone],
              [data-ui="Card"]:hover [data-ui="Text"][data-tone],
              [data-ui="Flex"]:hover [data-tone],
              [data-ui="Card"]:hover [data-tone],
              [data-ui="Flex"]:hover [data-tone="primary"],
              [data-ui="Card"]:hover [data-tone="primary"],
              [data-ui="Flex"]:hover [data-ui="Text"][data-tone="primary"],
              [data-ui="Card"]:hover [data-ui="Text"][data-tone="primary"],
              [data-ui="Flex"]:hover [class*="accent"],
              [data-ui="Card"]:hover [class*="accent"],
              [data-ui="Flex"]:hover [class*="primary"],
              [data-ui="Card"]:hover [class*="primary"] {
                color: #ffffff !important;
              }
              
              /* HOVER: White icons */
              [data-ui="Flex"][role="button"]:hover svg,
              [data-ui="Flex"][role="button"]:hover svg *,
              [data-as="li"] [data-ui="Flex"]:hover svg,
              [data-as="li"] [data-ui="Flex"]:hover svg *,
              [data-ui="Card"]:hover svg,
              [data-ui="Card"]:hover svg * {
                color: #ffffff !important;
                fill: currentColor !important;
              }
              
              /* ACTIVE: Darker purple background */
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-as="li"][aria-selected="true"] [data-ui="Flex"],
              [data-ui="Flex"][data-selected="true"],
              [data-ui="Card"][aria-selected="true"],
              [data-ui="Card"][data-selected="true"] {
                background-color: #7C3AED !important;
                border-radius: 6px !important;
              }
              
              /* ACTIVE: Force white text - ALWAYS WHITE */
              [data-ui="Flex"][role="button"][aria-selected="true"] * {
                color: #ffffff !important;
              }
              
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] * {
                color: #ffffff !important;
              }
              
              [data-ui="Flex"][data-selected="true"] * {
                color: #ffffff !important;
              }
              
              [data-ui="Card"][aria-selected="true"] * {
                color: #ffffff !important;
              }
              
              [data-ui="Card"][data-selected="true"] * {
                color: #ffffff !important;
              }
              
              /* ACTIVE: Override accent colors - Extra aggressive */
              [data-ui="Flex"][aria-selected="true"] [data-tone],
              [data-ui="Flex"][aria-selected="true"] [data-tone="primary"],
              [data-ui="Card"][aria-selected="true"] [data-tone],
              [data-ui="Card"][aria-selected="true"] [data-tone="primary"],
              [data-ui="Flex"][aria-selected="true"] [class*="accent"],
              [data-ui="Card"][aria-selected="true"] [class*="accent"],
              [data-ui="Flex"][data-selected="true"] [data-tone],
              [data-ui="Card"][data-selected="true"] [data-tone],
              [data-as="li"][aria-selected="true"] [data-tone] {
                color: #ffffff !important;
              }
              
              /* ACTIVE: Target Text components directly */
              [data-ui="Flex"][aria-selected="true"] [data-ui="Text"],
              [data-ui="Card"][aria-selected="true"] [data-ui="Text"],
              [data-ui="Flex"][data-selected="true"] [data-ui="Text"],
              [data-ui="Card"][data-selected="true"] [data-ui="Text"],
              [data-ui="Flex"][aria-selected="true"] span,
              [data-ui="Card"][aria-selected="true"] span,
              [data-ui="Flex"][data-selected="true"] span,
              [data-ui="Card"][data-selected="true"] span,
              [data-ui="Flex"][aria-selected="true"] p,
              [data-ui="Card"][aria-selected="true"] p,
              [data-ui="Flex"][data-selected="true"] p,
              [data-ui="Card"][data-selected="true"] p,
              [data-ui="Flex"][aria-selected="true"] div,
              [data-ui="Card"][aria-selected="true"] div,
              [data-ui="Flex"][data-selected="true"] div,
              [data-ui="Card"][data-selected="true"] div {
                color: #ffffff !important;
              }
              
              /* ACTIVE: Maximum specificity for stubborn elements */
              [data-ui="Flex"][aria-selected="true"][data-ui="Flex"][aria-selected="true"] *,
              [data-ui="Card"][aria-selected="true"][data-ui="Card"][aria-selected="true"] *,
              [data-ui="Flex"][data-selected="true"][data-ui="Flex"][data-selected="true"] *,
              [data-ui="Card"][data-selected="true"][data-ui="Card"][data-selected="true"] * {
                color: #ffffff !important;
              }
              
              /* ACTIVE: White icons */
              [data-ui="Flex"][role="button"][aria-selected="true"] svg,
              [data-ui="Flex"][role="button"][aria-selected="true"] svg *,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] svg,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] svg *,
              [data-ui="Card"][aria-selected="true"] svg,
              [data-ui="Card"][aria-selected="true"] svg *,
              [data-ui="Card"][data-selected="true"] svg,
              [data-ui="Card"][data-selected="true"] svg * {
                color: #ffffff !important;
                fill: currentColor !important;
              }
              
              /* Smooth transitions */
              [data-ui="Flex"][role="button"],
              [data-as="li"] [data-ui="Flex"],
              [data-ui="Card"] {
                transition: background-color 0.2s ease, border-radius 0.2s ease !important;
              }
              
              /* Prevent color transitions to keep text always white */
              [data-ui="Flex"][role="button"]:hover *,
              [data-as="li"] [data-ui="Flex"]:hover *,
              [data-ui="Card"]:hover *,
              [data-ui="Flex"][role="button"][aria-selected="true"] *,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] *,
              [data-ui="Card"][aria-selected="true"] *,
              [data-ui="Card"][data-selected="true"] * {
                transition: none !important;
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
