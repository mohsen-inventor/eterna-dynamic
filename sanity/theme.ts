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
              /* Structure navigation items - Home Page, Site Info, Hero Section, etc. */
              
              /* Hover states for all navigation items */
              [data-ui="Flex"][role="button"]:hover,
              [data-as="li"] [data-ui="Flex"]:hover,
              [data-ui="Card"]:hover,
              button[data-ui]:hover {
                background-color: #8B5CF6 !important;
                border-radius: 6px !important;
              }
              
              /* Force white text on hover - all children */
              [data-ui="Flex"][role="button"]:hover,
              [data-ui="Flex"][role="button"]:hover *,
              [data-ui="Flex"][role="button"]:hover span,
              [data-ui="Flex"][role="button"]:hover [data-ui="Text"],
              [data-as="li"] [data-ui="Flex"]:hover,
              [data-as="li"] [data-ui="Flex"]:hover *,
              [data-as="li"] [data-ui="Flex"]:hover span,
              [data-as="li"] [data-ui="Flex"]:hover [data-ui="Text"],
              [data-ui="Card"]:hover,
              [data-ui="Card"]:hover *,
              [data-ui="Card"]:hover span,
              [data-ui="Card"]:hover [data-ui="Text"],
              button[data-ui]:hover,
              button[data-ui]:hover *,
              button[data-ui]:hover span,
              button[data-ui]:hover [data-ui="Text"] {
                color: #ffffff !important;
              }
              
              /* Active/Selected states */
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-as="li"][aria-selected="true"] [data-ui="Flex"],
              [data-ui="Flex"][data-selected="true"],
              [data-ui="Card"][aria-selected="true"],
              [data-ui="Card"][data-selected="true"] {
                background-color: #7C3AED !important;
                border-radius: 6px !important;
              }
              
              /* Force white text on active - all children */
              [data-ui="Flex"][role="button"][aria-selected="true"],
              [data-ui="Flex"][role="button"][aria-selected="true"] *,
              [data-ui="Flex"][role="button"][aria-selected="true"] span,
              [data-ui="Flex"][role="button"][aria-selected="true"] [data-ui="Text"],
              [data-as="li"][aria-selected="true"] [data-ui="Flex"],
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] *,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] span,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] [data-ui="Text"],
              [data-ui="Flex"][data-selected="true"],
              [data-ui="Flex"][data-selected="true"] *,
              [data-ui="Flex"][data-selected="true"] span,
              [data-ui="Flex"][data-selected="true"] [data-ui="Text"],
              [data-ui="Card"][aria-selected="true"],
              [data-ui="Card"][aria-selected="true"] *,
              [data-ui="Card"][aria-selected="true"] span,
              [data-ui="Card"][aria-selected="true"] [data-ui="Text"],
              [data-ui="Card"][data-selected="true"],
              [data-ui="Card"][data-selected="true"] *,
              [data-ui="Card"][data-selected="true"] span,
              [data-ui="Card"][data-selected="true"] [data-ui="Text"] {
                color: #ffffff !important;
              }
              
              /* Ensure SVG icons are also white on hover */
              [data-ui="Flex"][role="button"]:hover svg,
              [data-as="li"] [data-ui="Flex"]:hover svg,
              [data-ui="Card"]:hover svg {
                color: #ffffff !important;
              }
              
              /* Ensure SVG icons are white on active */
              [data-ui="Flex"][role="button"][aria-selected="true"] svg,
              [data-as="li"][aria-selected="true"] [data-ui="Flex"] svg,
              [data-ui="Card"][aria-selected="true"] svg,
              [data-ui="Card"][data-selected="true"] svg {
                color: #ffffff !important;
              }
              
              /* Smooth transitions */
              [data-ui="Flex"][role="button"],
              [data-as="li"] [data-ui="Flex"],
              [data-ui="Card"],
              button[data-ui] {
                transition: all 0.2s ease !important;
              }
            `;
