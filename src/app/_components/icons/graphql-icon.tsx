import { type SVGProps } from "react";

const GraphQLIcon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={32}
    height={32}
    viewBox="0 0 50 50"
    color="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M 25 2 C 22.802121 2 21 3.8021212 21 6 C 21 6.3151782 21.111671 6.5958706 21.181641 6.890625 L 10.921875 12.322266 C 10.188946 11.522689 9.1619717 11 8 11 C 5.8021212 11 4 12.802121 4 15 C 4 16.839392 5.2915223 18.339799 7 18.796875 L 7 31.203125 C 5.2934384 31.659368 4 33.155949 4 35 C 4 37.191818 5.7985045 39 8 39 C 9.1619717 39 10.188946 38.477311 10.921875 37.677734 L 21.181641 43.109375 C 21.111671 43.404129 21 43.684822 21 44 C 21 46.197879 22.802121 48 25 48 C 27.201495 48 29 46.191818 29 44 C 29 43.684822 28.888329 43.404129 28.818359 43.109375 L 39.078125 37.677734 C 39.811054 38.477311 40.838028 39 42 39 C 44.201495 39 46 37.191818 46 35 C 46 33.155949 44.706562 31.659368 43 31.203125 L 43 18.796875 C 44.708478 18.339799 46 16.839392 46 15 C 46 12.802121 44.197879 11 42 11 C 40.838028 11 39.811054 11.522689 39.078125 12.322266 L 28.818359 6.890625 C 28.888575 6.5955742 29 6.3151477 29 6 C 29 3.8021212 27.197879 2 25 2 z M 25 4 C 26.120121 4 27 4.8798788 27 6 C 27 7.1081818 26.116505 8 25 8 C 23.879879 8 23 7.1201212 23 6 C 23 4.8798788 23.879879 4 25 4 z M 22.078125 8.6777344 C 22.120085 8.7235114 22.139585 8.7862799 22.183594 8.8300781 L 9.0585938 31.214844 C 9.0395309 31.209439 9.0191746 31.208251 9 31.203125 L 9 18.796875 C 10.706562 18.340632 12 16.844051 12 15 C 12 14.684822 11.888329 14.404129 11.818359 14.109375 L 22.078125 8.6777344 z M 27.921875 8.6796875 L 38.181641 14.109375 C 38.111671 14.404132 38 14.684822 38 15 C 38 16.844051 39.293438 18.340632 41 18.796875 L 41 31.203125 C 40.98083 31.208225 40.960466 31.209424 40.941406 31.214844 L 27.818359 8.828125 C 27.861269 8.785346 27.880909 8.7243449 27.921875 8.6796875 z M 23.941406 9.7851562 C 24.286007 9.8828655 24.625453 10 25 10 C 25.374711 10 25.714114 9.8828999 26.058594 9.7851562 L 39.183594 32.169922 C 38.68835 32.662786 38.38834 33.307211 38.203125 34 L 11.796875 34 C 11.61166 33.307211 11.31165 32.662786 10.816406 32.169922 L 23.941406 9.7851562 z M 8 13 C 9.1201212 13 10 13.879879 10 15 C 10 16.120121 9.1201212 17 8 17 C 6.8834955 17 6 16.108182 6 15 C 6 13.879879 6.8798788 13 8 13 z M 42 13 C 43.120121 13 44 13.879879 44 15 C 44 16.108182 43.116505 17 42 17 C 40.879879 17 40 16.120121 40 15 C 40 13.879879 40.879879 13 42 13 z M 8 33 C 9.1201212 33 10 33.879879 10 35 C 10 36.120121 9.1201212 37 8 37 C 6.8834955 37 6 36.108182 6 35 C 6 33.879879 6.8798788 33 8 33 z M 42 33 C 43.120121 33 44 33.879879 44 35 C 44 36.108182 43.116505 37 42 37 C 40.879879 37 40 36.120121 40 35 C 40 33.879879 40.879879 33 42 33 z M 12.027344 36 L 37.972656 36 L 27.921875 41.322266 C 27.188946 40.522689 26.161972 40 25 40 C 23.838028 40 22.811054 40.522689 22.078125 41.322266 L 12.027344 36 z M 25 42 C 26.120121 42 27 42.879879 27 44 C 27 45.108182 26.116505 46 25 46 C 23.879879 46 23 45.120121 23 44 C 23 42.879879 23.879879 42 25 42 z"
    />
  </svg>
);

export default GraphQLIcon;
