const planets = [
  {id: 0, name: 'jupiter', svg: 
  `<svg id="jupiter" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Jupiter.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview9" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg7" />
    <path inkscape:connector-curvature="0" id="path2"
      d="m 2.25,1 c 1.3398438,0.773437 2.1640625,2.203125 2.1640625,3.75 0,1.546875 -0.8242187,2.9765625 -2.1640625,3.75 h 7.5"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path4" d="m 7.25,6 v 5"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;stroke-opacity:1;stroke-dasharray:none" />
    </svg>`
  },
  {id: 1, name: 'mars', svg: 
  `<svg id="mars" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Mars.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <path inkscape:connector-curvature="0" id="path2"
      d="M 9,7 C 9,4.7929688 7.2070312,3 5,3 2.7929688,3 1,4.7929688 1,7 1,9.2070312 2.7929688,11 5,11 7.2070312,11 9,9.2070312 9,7 Z m 0,0"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path4" d="M 7.828125,4.171875 11,1"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path6" d="M 9.2304688,1 H 11 v 1.7695312"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    </svg>`
  },
  {id: 2, name: 'mercury', svg: 
  `<svg id="mercury" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Mercury.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview13" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg11" />
    <path inkscape:connector-curvature="0" id="path2"
      d="M 8,5 C 8,3.8945312 7.1054688,3 6,3 4.8945312,3 4,3.8945312 4,5 4,6.1054688 4.8945312,7 6,7 7.1054688,7 8,6.1054688 8,5 Z m 0,0"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path4"
      d="M 4,1 C 4,2.1054688 4.8945312,3 6,3 7.1054688,3 8,2.1054688 8,1"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path6" d="M 6,11 V 7"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path8" d="M 4,9 H 8"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
  </svg>`
  },
  {id: 3, name: 'moon', svg: 
  `<svg id="moon" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Moon.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview7" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg5" />
    <path inkscape:connector-curvature="0" id="path2"
      d="m 8.5,1 c -2.7617188,0 -5,2.2382812 -5,5 0,2.7617188 2.2382812,5 5,5 C 6.7148438,9.96875 5.6132812,8.0625 5.6132812,6 5.6132812,3.9375 6.7148438,2.03125 8.5,1 Z m 0,0"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;stroke-opacity:1;stroke-dasharray:none" />
  </svg>`
  },
  {id: 4, name: 'saturn', svg: 
  `<svg id="saturn" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Saturn.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <path inkscape:connector-curvature="0" id="path2" d="M 3,3 H 7"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path4" d="M 5,1 V 6"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path6"
      d="M 5,6 C 5,4.8945312 5.8945312,4 7,4 8.1054688,4 9,4.8945312 9,6 9,6.53125 8.7890625,7.0390625 8.4140625,7.4140625 7.5078125,8.3203125 7,9.71875 7,11"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
  </svg>`
  },
  {id: 5, name: 'sun', svg: 
  `<svg id="sun" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1">
    <g id="surface1">
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
        d="M 6.898438 6 C 6.898438 5.503906 6.496094 5.101562 6 5.101562 C 5.503906 5.101562 5.101562 5.503906 5.101562 6 C 5.101562 6.496094 5.503906 6.898438 6 6.898438 C 6.496094 6.898438 6.898438 6.496094 6.898438 6 " />
      <path
        style="fill:none;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;"
        d="M 110 60 C 110 87.617188 87.617188 110 60 110 C 32.382812 110 10 87.617188 10 60 C 10 32.382812 32.382812 10 60 10 C 87.617188 10 110 32.382812 110 60 Z M 110 60 "
        transform="matrix(0.1,0,0,-0.1,0,12)" />
    </g>
  </svg>`
  },
  {id: 6, name: 'venus', svg: 
  `<svg id="venus" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1"
      sodipodi:docname="Venus (fixed width).svg" inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="8" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <path inkscape:connector-curvature="0" id="path2"
      d="M 8.5,3.5 C 8.5,2.1210938 7.3789062,1 6,1 4.6210938,1 3.5,2.1210938 3.5,3.5 3.5,4.8789062 4.6210938,6 6,6 7.3789062,6 8.5,4.8789062 8.5,3.5 Z m 0,0"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path4" d="M 6,11 V 6"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
    <path inkscape:connector-curvature="0" id="path6" d="m 3.5,8.5 h 5"
      style="fill:none;stroke:#000000;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" />
  </svg>`
  },
];

const signs = [
  {id: 0, name: 'aquarius', svg: 
  `<svg id="aquarius" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="Aquarius.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="1.4915249" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g id="g823">
      <path id="path7"
        d="M 0.99993842,7.7502192 C 1.3316699,7.4190707 1.7811689,7.2325082 2.2499072,7.2325082 c 0.4687383,0 0.9188203,0.1865625 1.2499688,0.517711 0.3317314,0.3317314 0.7812304,0.5177109 1.2499687,0.5177109 0.4687383,0 0.9188203,-0.1859795 1.2499688,-0.5177109 0.3317314,-0.3311485 0.7812304,-0.517711 1.2499687,-0.517711 0.4687383,0 0.9188203,0.1865625 1.2499688,0.517711 0.3317314,0.3317314 0.7812304,0.5177109 1.2499687,0.5177109 0.4687383,0 0.9188203,-0.1859795 1.2499683,-0.5177109"
        style="clip-rule:nonzero;fill:none;stroke:#000000;stroke-width:0.59999996;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        inkscape:connector-curvature="0" />
      <path id="path9"
        d="M 0.99993842,4.2497817 C 1.3316699,3.9186332 1.7811689,3.7320707 2.2499072,3.7320707 c 0.4687383,0 0.9188203,0.1865625 1.2499688,0.517711 0.3317314,0.3317314 0.7812304,0.5177109 1.2499687,0.5177109 0.4687383,0 0.9188203,-0.1859795 1.2499688,-0.5177109 0.3317314,-0.3311485 0.7812304,-0.517711 1.2499687,-0.517711 0.4687383,0 0.9188203,0.1865625 1.2499688,0.517711 0.3317314,0.3317314 0.7812304,0.5177109 1.2499687,0.5177109 0.4687383,0 0.9188203,-0.1859795 1.2499683,-0.5177109"
        style="clip-rule:nonzero;fill:none;stroke:#000000;stroke-width:0.59999996;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        inkscape:connector-curvature="0" />
    </g>
  </svg>`
  },
  {id: 1, name: 'aries', svg: 
  `<svg id="aries" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="ar.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-2.6101696" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6657917e-4,0.15026658)" id="surface1"
      style="stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
      <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 116.05469,451.07031 c -31.406252,31.40625 -49.062502,74.02344 -49.062502,118.4375 0,44.41406 17.65625,87.03125 49.062502,118.4375 31.40625,31.40625 74.02343,49.0625 118.4375,49.0625 92.5,0 167.5,-75 167.5,-167.5 V 67.007812"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 401.99219,569.50781 c 0,92.5 75,167.5 167.5,167.5 44.41406,0 87.03125,-17.65625 118.4375,-49.0625 31.40625,-31.40625 49.0625,-74.02344 49.0625,-118.4375 0,-44.41406 -17.65625,-87.03125 -49.0625,-118.4375"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
    </g>
  </svg>`
  },
  {id: 2, name: 'cancer', svg: 
  `<svg id="cancer" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="can.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="32.644068" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6657917e-4,2.6657918e-4)" id="surface1"
      style="stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
      <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        clip-path="url(#clip1)" id="g15">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 736.99219,402.00781 c 0,185 -149.96094,335 -335,335 -88.82813,0 -174.0625,-35.3125 -236.875,-98.125"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 736.99219,402.00781 c 0,61.67969 -50,111.67969 -111.67969,111.67969 -61.64063,0 -111.64063,-50 -111.64063,-111.67969 0,-61.67969 50,-111.67969 111.64063,-111.67969 61.67969,0 111.67969,50 111.67969,111.67969 z m 0,0"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 66.992188,402.00781 c 0,-185.03906 150.000002,-334.999998 335.000002,-334.999998 88.86718,0 174.0625,35.273438 236.875,98.124998"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path11" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 66.992188,402.00781 c 0,-61.67969 50.000002,-111.67969 111.679682,-111.67969 61.67969,0 111.64063,50 111.64063,111.67969 0,61.67969 -49.96094,111.67969 -111.64063,111.67969 -61.67968,0 -111.679682,-50 -111.679682,-111.67969 z m 0,0"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path13" />
      </g>
    </g>
  </svg>`
  },
  {id: 3, name: 'capricorn', svg: 
  `<svg id="capricorn" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="cap.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-10.745763" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,-0.14973342,2.6657917e-4)" id="surface1"
      style="stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
      <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        clip-path="url(#clip1)" id="g9">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 66.992188,513.6875 H 178.67187 L 290.3125,67.007812 401.99219,513.6875 H 625.3125 c 61.67969,0 111.67969,49.96094 111.67969,111.64062 0,19.60938 -5.15625,38.86719 -14.96094,55.85938 -19.92188,34.53125 -56.79688,55.82031 -96.71875,55.82031 -61.64063,0 -111.64063,-50 -111.64063,-111.67969 0,-19.60937 5.15625,-38.86718 14.96094,-55.82031 l 193.39844,-335 c 9.80469,-16.99219 14.96094,-36.25 14.96094,-55.82031 0,-61.67969 -50,-111.679688 -111.67969,-111.679688 -61.64063,0 -111.64063,49.999998 -111.64063,111.679688"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
      </g>
    </g>
  </svg>`
  },
  {id: 4, name: 'gemini', svg: 
  `<svg id="gemini" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="gem.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-13.457627" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.4500506e-4,2.4501754e-4)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 736.99219,67.007812 c -101.83594,58.789068 -217.38282,89.765628 -335,89.765628 -117.61719,0 -233.125,-30.97656 -335.000002,-89.765628"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 736.99219,737.00781 c -101.83594,-58.82812 -217.38282,-89.76562 -335,-89.76562 -117.61719,0 -233.125,30.9375 -335.000002,89.76562"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
      <path inkscape:connector-curvature="0"
        style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 569.49219,668.53125 V 135.48437" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path13" />
      <path inkscape:connector-curvature="0"
        style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 234.49219,668.53125 V 135.48437" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path15" />
    </g>
  </svg>`
  },
  {id: 5, name: 'leo', svg: 
  `<svg id="leo" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="le.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-13.457627" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6656425e-4,2.6657918e-4)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 318.24219,318.25781 c 0,46.25 -37.5,83.75 -83.75,83.75 -46.25,0 -83.75,-37.5 -83.75,-83.75 0,-46.25 37.5,-83.75 83.75,-83.75 46.25,0 83.75,37.5 83.75,83.75 z m 0,0"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 318.24219,318.25781 c 0,83.75 -83.75,167.5 -83.75,251.25 0,92.5 75,167.5 167.5,167.5 92.5,0 167.5,-75 167.5,-167.5 0,-167.5 -83.75,-251.25 -83.75,-418.75 0,-46.25 37.5,-83.749998 83.75,-83.749998 46.25,0 83.75,37.499998 83.75,83.749998"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
    </g>
  </svg>`
  },
  {id: 6, name: 'libra', svg: 
  `<svg id="libra" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="lib.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-5.322034" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6657917e-4,2.6656425e-4)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <path inkscape:connector-curvature="0"
        style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 66.992188,234.50781 H 736.99219" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 66.992188,402.00781 H 234.49219 c 0,92.5 75,167.5 167.5,167.5 92.5,0 167.5,-75 167.5,-167.5 h 167.5"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
    </g>
  </svg>`
  },
  {id: 7, name: 'ophiuchus', svg: 
  `<svg id="ophiuchus" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="oph.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="41.7193" inkscape:cx="5.3891456" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.2986294e-4,6.4160154e-4)" id="surface1"
      style="stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
      <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 234.49219,737.00781 v -502.5 c 0,-92.5 75,-167.499998 167.5,-167.499998 92.5,0 167.5,74.999998 167.5,167.499998 v 502.5"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 66.992188,402.00781 c 34.570312,59.84375 98.398432,96.67969 167.500002,96.67969 69.10156,0 132.96875,-36.83594 167.5,-96.67969 34.57031,-59.84375 98.39843,-96.71875 167.5,-96.71875 69.10156,0 132.96875,36.875 167.5,96.71875"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
    </g>
  </svg>`
  },
  {id: 8, name: 'pisces', svg: 
  `<svg id="pisces" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1"
      sodipodi:docname="Portia_symbol_(fixed_width).svg" inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview15" showgrid="false"
      inkscape:zoom="29.5" inkscape:cx="1.1724998" inkscape:cy="10.033898" inkscape:window-x="0"
      inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg13"
      inkscape:snap-midpoints="true" inkscape:snap-smooth-nodes="true" />
    <g transform="translate(-34.199593,-34.199037)" id="g832">
      <g transform="matrix(0.14925,0,0,0.14925,34.199485,34.199485)"
        style="stroke:#000000;stroke-width:4.02010012;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        id="surface1">
        <path inkscape:connector-curvature="0" id="path7" transform="matrix(0.1,0,0,-0.1,0,80.4)"
          d="M 66.992188,402.00781 H 736.99219"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010012;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          id="g13" clip-path="url(#clip1-1)">
          <path inkscape:connector-curvature="0" id="path9-2" transform="matrix(0.1,0,0,-0.1,0,80.4)"
            d="m 192.61719,111.89063 c 103.67187,59.84374 167.5,170.42968 167.5,290.11718 0,119.6875 -63.82813,230.27344 -167.5,290.11719"
            style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path inkscape:connector-curvature="0" id="path11" transform="matrix(0.1,0,0,-0.1,0,80.4)"
            d="m 611.36719,692.125 c -103.63282,-59.84375 -167.5,-170.42969 -167.5,-290.11719 0,-119.6875 63.86718,-230.27344 167.5,-290.11718"
            style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        </g>
      </g>
    </g>
  </svg>`
  },
  {id: 9, name: 'sagittarius', svg: 
  `<svg id="sagittarius" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="sag.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-10.745763" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,-0.0436674,0.04420056)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <path inkscape:connector-curvature="0"
        style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 569.49219,737.00781 h 167.5 v -167.5" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g13">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 66.992188,67.007812 736.99219,737.00781" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 234.49219,569.50781 335,-335" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path11" />
      </g>
    </g>
  </svg>`
  },
  {id: 10, name: 'scorpio', svg: 
  `<svg id="scorpio" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="sco.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-13.457627" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6657917e-4,2.6656425e-4)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g13">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 91.523438,510.28906 c -15.703126,15.70313 -24.53125,36.99219 -24.53125,59.21875 0,22.1875 8.828124,43.51563 24.53125,59.21875 15.703122,15.70313 37.031252,24.53125 59.218752,24.53125 46.25,0 83.75,-37.5 83.75,-83.75 v -335"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 234.49219,569.50781 c 0,46.25 37.5,83.75 83.75,83.75 46.25,0 83.75,-37.5 83.75,-83.75 v -335"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 401.99219,569.50781 c 0,46.25 37.5,83.75 83.75,83.75 46.25,0 83.75,-37.5 83.75,-83.75 v -335 c 0,-46.25 37.5,-83.75 83.75,-83.75 22.22656,0 43.51562,8.82813 59.21875,24.53125 15.70312,15.70313 24.53125,36.99219 24.53125,59.21875 0,22.1875 -8.82813,43.51563 -24.53125,59.21875 l -33.47657,33.47656"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path11" />
      </g>
      <path inkscape:connector-curvature="0"
        style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="m 670.58594,251.85156 v 83.75 h 83.75" transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path15" />
    </g>
  </svg>`
  },
  {id: 11, name: 'taurus', svg: 
    `<svg id="taurus" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="tau.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-16.169492" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6663888e-4,-0.14973342)" id="surface1"
      style="stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none">
      <g style="clip-rule:nonzero;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none"
        clip-path="url(#clip1)" id="g11">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 625.3125,290.32812 c 0,123.35938 -99.96094,223.35938 -223.32031,223.35938 -123.32032,0 -223.32032,-100 -223.32032,-223.35938 0,-123.32031 100,-223.320308 223.32032,-223.320308 123.35937,0 223.32031,99.999998 223.32031,223.320308 z m 0,0"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 178.67187,737.00781 c 0,-123.35937 100,-223.32031 223.32032,-223.32031 123.35937,0 223.32031,99.96094 223.32031,223.32031"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
      </g>
    </g>
  </svg>`
  },
  {id: 12, name: 'virgo', svg: 
  `<svg id="virgo" width="19pt" height="19pt" viewBox="0 0 12 12" version="1.1" sodipodi:docname="vir.svg"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
      gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2"
      inkscape:window-width="1920" inkscape:window-height="1015" id="namedview11" showgrid="false"
      inkscape:zoom="14.75" inkscape:cx="-8.0338984" inkscape:cy="8" inkscape:window-x="0" inkscape:window-y="0"
      inkscape:window-maximized="1" inkscape:current-layer="svg9" />
    <g transform="matrix(0.14925,0,0,0.14925,2.6657917e-4,2.6656425e-4)" id="surface1"
      style="stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
      <g style="clip-rule:nonzero;stroke:#000000;stroke-width:4.02010059;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        clip-path="url(#clip1)" id="g15">
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 91.523438,510.28906 c -15.703126,15.70313 -24.53125,36.99219 -24.53125,59.21875 0,22.1875 8.828124,43.51563 24.53125,59.21875 15.703122,15.70313 37.031252,24.53125 59.218752,24.53125 46.25,0 83.75,-37.5 83.75,-83.75 v -335"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path7" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 234.49219,569.50781 c 0,46.25 37.5,83.75 83.75,83.75 46.25,0 83.75,-37.5 83.75,-83.75 v -335"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path9" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 401.99219,569.50781 c 0,46.25 37.5,83.75 83.75,83.75 46.25,0 83.75,-37.5 83.75,-83.75 v -335 c 0,-46.25 37.5,-83.75 83.75,-83.75"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path11" />
        <path inkscape:connector-curvature="0"
          style="fill:none;stroke:#000000;stroke-width:40.20100403;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 569.49219,234.50781 v 251.25 c 0,46.25 37.5,83.75 83.75,83.75 46.25,0 83.75,-37.5 83.75,-83.75 0,-138.75 -112.5,-251.25 -251.25,-251.25"
          transform="matrix(0.1,0,0,-0.1,0,80.4)" id="path13" />
      </g>
    </g>
  </svg>`
  },
];