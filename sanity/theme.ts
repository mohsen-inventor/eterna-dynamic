import { definePlugin } from 'sanity';

export const customTheme = definePlugin({
  name: 'custom-theme',
  studio: {
    components: {
      layout: (props) => {
        // Inject custom CSS with MutationObserver to ensure it stays applied
        if (typeof document !== 'undefined') {
          const applyStyles = () => {
            const styleId = 'custom-sanity-theme';
            let style = document.getElementById(styleId) as HTMLStyleElement;
            
            if (!style) {
              style = document.createElement('style');
              style.id = styleId;
              // Append to end of head for maximum priority
              document.head.appendChild(style);
            }
            
            style.textContent = `
              /* ULTRA-AGGRESSIVE: Force white text on purple hover/active */
              
              /* HOVER: Purple background */
              [data-ui="Flex"][role="button"]:hover,
              [data-as="li"] > [data-ui="Flex"]:hover,
              [data-ui="Card"]:hover,
              li:hover > [data-ui="Flex"] {
                background-color: #8B5CF6 !important;
                border-radius: 6px !important;
              }
              
              /* HOVER: FORCE WHITE - All possible selectors */
              [data-ui="Flex"][role="button"]:hover,
              [data-ui="Flex"][role="button"]:hover *,
              [data-ui="Flex"][role="button"]:hover span,
              [data-ui="Flex"][role="button"]:hover div,
              [data-ui="Flex"][role="button"]:hover p,
              [data-ui="Flex"][role="button"]:hover [data-ui="Text"],
              [data-ui="Flex"][role="button"]:hover [data-tone],
              [data-ui="Flex"][role="button"]:hover [data-tone="primary"],
              [data-as="li"] > [data-ui="Flex"]:hover,
              [data-as="li"] > [data-ui="Flex"]:hover *,
              [data-as="li"] > [data-ui="Flex"]:hover span,
              [data-as="li"] > [data-ui="Flex"]:hover div,
              [data-as="li"] > [data-ui="Flex"]:hover p,
              [data-as="li"] > [data-ui="Flex"]:hover [data-ui="Text"],
              [data-as="li"] > [data-ui="Flex"]:hover [data-tone],
              [data-as="li"] > [data-ui="Flex"]:hover [data-tone="primary"],
              li:hover > [data-ui="Flex"],
              li:hover > [data-ui="Flex"] *,
              li:hover > [data-ui="Flex"] span,
              li:hover > [data-ui="Flex"] div,
              li:hover > [data-ui="Flex"] [data-ui="Text"],
              li:hover > [data-ui="Flex"] [data-tone],
              [data-ui="Card"]:hover,
              [data-ui="Card"]:hover *,
              [data-ui="Card"]:hover span,
              [data-ui="Card"]:hover div,
              [data-ui="Card"]:hover [data-ui="Text"],
              [data-ui="Card"]:hover [data-tone] {
                color: #ffffff !important;
              }
              
              /* HOVER: White icons */
              [data-ui="Flex"]:hover svg,
              [data-ui="Flex"]:hover svg *,
              [data-ui="Card"]:hover svg,
              [data-ui="Card"]:hover svg *,
              li:hover svg,
              li:hover svg * {
                color: #ffffff !important;
                fill: currentColor !important;
              }
              
              /* ACTIVE: Darker purple background */
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"],
              [data-ui="Flex"][data-selected="true"],
              [data-ui="Card"][aria-selected="true"],
              [data-ui="Card"][data-selected="true"],
              li[aria-selected="true"] > [data-ui="Flex"] {
                background-color: #7C3AED !important;
                border-radius: 6px !important;
              }
              
              /* ACTIVE: FORCE WHITE - All possible selectors */
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-ui="Flex"][role="button"][aria-selected="true"] *,
              [data-ui="Flex"][role="button"][aria-selected="true"] span,
              [data-ui="Flex"][role="button"][aria-selected="true"] div,
              [data-ui="Flex"][role="button"][aria-selected="true"] [data-ui="Text"],
              [data-ui="Flex"][role="button"][aria-selected="true"] [data-tone],
              [data-ui="Flex"][role="button"][aria-selected="true"] [data-tone="primary"],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] *,
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] span,
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] div,
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] [data-ui="Text"],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] [data-tone],
              [data-as="li"][aria-selected="true"] > [data-ui="Flex"] [data-tone="primary"],
              li[aria-selected="true"] > [data-ui="Flex"],
              li[aria-selected="true"] > [data-ui="Flex"] *,
              li[aria-selected="true"] > [data-ui="Flex"] span,
              li[aria-selected="true"] > [data-ui="Flex"] div,
              li[aria-selected="true"] > [data-ui="Flex"] [data-ui="Text"],
              li[aria-selected="true"] > [data-ui="Flex"] [data-tone],
              [data-ui="Flex"][data-selected="true"],
              [data-ui="Flex"][data-selected="true"] *,
              [data-ui="Flex"][data-selected="true"] span,
              [data-ui="Flex"][data-selected="true"] div,
              [data-ui="Flex"][data-selected="true"] [data-ui="Text"],
              [data-ui="Flex"][data-selected="true"] [data-tone],
              [data-ui="Card"][aria-selected="true"],
              [data-ui="Card"][aria-selected="true"] *,
              [data-ui="Card"][aria-selected="true"] span,
              [data-ui="Card"][aria-selected="true"] div,
              [data-ui="Card"][aria-selected="true"] [data-ui="Text"],
              [data-ui="Card"][aria-selected="true"] [data-tone],
              [data-ui="Card"][data-selected="true"],
              [data-ui="Card"][data-selected="true"] *,
              [data-ui="Card"][data-selected="true"] span,
              [data-ui="Card"][data-selected="true"] div,
              [data-ui="Card"][data-selected="true"] [data-ui="Text"],
              [data-ui="Card"][data-selected="true"] [data-tone] {
                color: #ffffff !important;
              }
              
              /* ACTIVE: White icons */
              [data-ui="Flex"][aria-selected="true"] svg,
              [data-ui="Flex"][aria-selected="true"] svg *,
              [data-ui="Card"][aria-selected="true"] svg,
              [data-ui="Card"][aria-selected="true"] svg *,
              [data-ui="Card"][data-selected="true"] svg,
              [data-ui="Card"][data-selected="true"] svg *,
              li[aria-selected="true"] svg,
              li[aria-selected="true"] svg * {
                color: #ffffff !important;
                fill: currentColor !important;
              }
              
              /* Smooth transitions for background only */
              [data-ui="Flex"][role="button"],
              [data-as="li"] > [data-ui="Flex"],
              [data-ui="Card"],
              li > [data-ui="Flex"] {
                transition: background-color 0.2s ease, border-radius 0.2s ease !important;
              }
              
              /* Kill ALL color transitions on text */
              [data-ui="Flex"] *,
              [data-ui="Card"] *,
              li * {
                transition: none !important;
              }
            `;
          };
          
          // Apply styles immediately
          applyStyles();
          
          // Re-apply if DOM changes (Sanity dynamically adds elements)
          const observer = new MutationObserver(applyStyles);
          observer.observe(document.head, { childList: true });
        }
        
        return props.renderDefault(props);
      },
    },
  },
});
