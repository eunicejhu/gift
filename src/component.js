import anime from "animejs";
export default (text = "Hello world") => {
  const element = document.createElement("div");

  element.innerHTML = `

<svg id="header-illustration" width="526px" height="336px" viewBox="0 0 526 336" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-914.000000, 0.000000)">
            <g id="bg-double" transform="translate(914.000000, -95.000000)">
                <path d="M818.706727,0 C897.625773,0 876.64439,44.8718227 876.64439,178.383798 C876.64439,221.499646 920.617717,391.084816 835.499571,453.684803 C750.381424,516.284791 748.581334,518.921023 593.752186,456.518303 C482.529904,411.691002 482.529904,411.691002 261.809285,378.552253 C225.585566,373.113664 216.788263,351.348698 243.638473,326.217422 C324.000632,251 372.393141,177.641755 395.945919,121.286334 C440.892487,13.7413694 739.78768,0 818.706727,0 Z" id="Rectangle-3" fill="#FECF5C"></path>
                <path d="M352.899714,77.8586034 C320.007583,108.462076 303.561518,140.834374 303.561518,174.975497 C303.561518,208.774255 315.006378,227.956418 377.535968,254.746917 C440.065559,281.537416 268.069173,281.537416 183.475906,271.378042 C89.2894362,260.066555 0,234.562177 0,190.258893 C0,155.324504 115.261023,113.297309 345.783069,64.1773068 C350.104337,63.2565191 354.35386,66.0131576 355.274642,70.3344265 C355.860866,73.0855964 354.959115,75.9424972 352.899714,77.8586034 Z" id="Rectangle-3" fill="#8EECE4"></path>
            </g>
        </g>
    </g>
</svg>
<main>
  <section >
    <h1 >
      Landing Page
    </h1>
    <button id="trigger" class="button">
      Submit
    </button>
    <div class="landing-illustration">

<svg id="pin" width="434px" height="324px" viewBox="0 0 434 324" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M19.3839441,194.300326 C29.7868327,198.594074 35.183532,196.435714 44.3548028,186.52207 C50.8485798,179.502651 60.1980193,160.548197 60.1980193,152.74694 C60.1980193,133.927837 47.2045519,122.043945 30.3683983,122.043945 C13.5322447,122.043945 0.538796748,118.989426 0.538796748,137.808529 C0.538796748,156.627631 0.538796748,186.52207 19.3839441,194.300326 Z" id="path-1"></path>
        <filter x="-11.7%" y="-6.7%" width="123.5%" height="118.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-504.000000, -436.000000)">
            <g id="Group" transform="translate(502.000000, 431.000000)">
                <g transform="translate(5.671545, 4.700000)">
                    <path d="M77.9772305,107.495544 C103.915148,107.495544 142.276252,29.2884473 143.9394,21.4114947 C151.477459,-14.2900367 -18.7024555,-4.04057731 2.54679356,48.1213254 C9.9770814,66.3609325 26.6266483,93.4061613 39.0047458,100.932068 C51.4789515,108.516408 68.8353347,107.495544 77.9772305,107.495544 Z" id="Oval" fill-opacity="0.78014606" fill="#FECF5C"></path>
                    <path d="M392.454106,322.367914 C402.107279,325.874992 407.115049,324.112072 415.625365,316.014735 C421.651149,310.281365 430.326794,294.799611 430.326794,288.427646 C430.326794,273.056446 418.269739,263.349837 402.646933,263.349837 C387.024126,263.349837 374.967089,260.854944 374.967089,276.226144 C374.967089,291.597344 374.967089,316.014735 392.454106,322.367914 Z" id="Oval-2" fill="#8EECE4"></path>
                    <polygon id="Rectangle-2" fill="#FFFFFF" points="28.3577236 49.8824219 397.00813 23.6040365 397.00813 294.429297 28.3577236 268.150911"></polygon>
                    <path d="M156.096192,310.559905 C186.291854,299.088793 201.389685,265.807714 201.389685,210.716667 C196.888085,254.071606 176.983752,275.749076 141.676685,275.749076 C78.7956066,275.749076 35.4471545,218.711189 35.4471545,231.270955 C35.4471545,237.475009 53.2470669,248.376912 85.3424536,285.761707 C117.43784,323.146501 133.931951,318.979939 156.096192,310.559905 Z" id="Oval-3" fill="#F69D62"></path>
                    <g id="Oval-2">
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        <use fill="#CB98EB" fill-rule="evenodd" xlink:href="#path-1"></use>
                    </g>
                    <path d="M301.563898,185.721147 C310.920186,187.195678 316.911802,184.038629 319.538747,176.25 C325.022468,183.608542 331.91737,187.287814 340.22345,187.287814 C348.601533,187.287814 355.724196,183.869654 361.591438,177.033333 C366.249416,183.869654 372.557901,187.287814 380.516895,187.287814 C389.367607,187.287814 395.757325,184.942812 399.686052,180.252809 C402.614135,184.942812 407.189956,187.287814 413.413516,187.287814" id="Line" stroke="#CB98EB" stroke-width="3" stroke-linecap="square"></path>
                    <path d="M301.563898,238.20448 C310.920186,239.679012 316.911802,236.521963 319.538747,228.733333 C325.022468,236.091876 331.91737,239.771147 340.22345,239.771147 C348.601533,239.771147 355.724196,236.352987 361.591438,229.516667 C366.249416,236.352987 372.557901,239.771147 380.516895,239.771147 C389.367607,239.771147 395.757325,237.426145 399.686052,232.736142 C402.614135,237.426145 407.189956,239.771147 413.413516,239.771147" id="Line" stroke="#CB98EB" stroke-width="3" stroke-linecap="square"></path>
                    <path d="M301.563898,212.35448 C310.920186,213.829012 316.911802,210.671963 319.538747,202.883333 C325.022468,210.241876 331.91737,213.921147 340.22345,213.921147 C348.601533,213.921147 355.724196,210.502987 361.591438,203.666667 C366.249416,210.502987 372.557901,213.921147 380.516895,213.921147 C389.367607,213.921147 395.757325,211.576145 399.686052,206.886142 C402.614135,211.576145 407.189956,213.921147 413.413516,213.921147" id="Line" stroke="#8EECE4" stroke-width="3" stroke-linecap="square"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
    </div>
  </section>

<svg class="background-curve" width="100%"  viewBox="0 0 1356 260" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.202473958">
        <g id="Desktop-HD" transform="translate(-40.000000, -678.000000)" fill="#D8D8D8">
            <path d="M40,783.649303 C263.652803,567.502959 1311.23432,725.545372 1396,900.495578 C1396,1316.19813 1396,1890.6996 1396,2624 L40,2624 L40,1556.30188 C40,1161.78469 40,904.233827 40,783.649303 Z" id="Rectangle-4"></path>
        </g>
    </g>
</svg>
  <div class="features">
    <section class="feature">
      
<svg id="anime-1" width="434px" height="324px" viewBox="0 0 434 324" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M19.3839441,194.300326 C29.7868327,198.594074 35.183532,196.435714 44.3548028,186.52207 C50.8485798,179.502651 60.1980193,160.548197 60.1980193,152.74694 C60.1980193,133.927837 47.2045519,122.043945 30.3683983,122.043945 C13.5322447,122.043945 0.538796748,118.989426 0.538796748,137.808529 C0.538796748,156.627631 0.538796748,186.52207 19.3839441,194.300326 Z" id="feature2-path-1"></path>
        <filter x="-11.7%" y="-6.7%" width="123.5%" height="118.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-233.000000, -931.000000)">
            <g id="feature-1" transform="translate(231.000000, 926.000000)">
                <g id="Group">
                    <g transform="translate(5.671545, 4.700000)">
                        <path d="M77.9772305,107.495544 C103.915148,107.495544 142.276252,29.2884473 143.9394,21.4114947 C151.477459,-14.2900367 -18.7024555,-4.04057731 2.54679356,48.1213254 C9.9770814,66.3609325 26.6266483,93.4061613 39.0047458,100.932068 C51.4789515,108.516408 68.8353347,107.495544 77.9772305,107.495544 Z" id="Oval" fill-opacity="0.78014606" fill="#FECF5C"></path>
                        <path d="M392.454106,322.367914 C402.107279,325.874992 407.115049,324.112072 415.625365,316.014735 C421.651149,310.281365 430.326794,294.799611 430.326794,288.427646 C430.326794,273.056446 418.269739,263.349837 402.646933,263.349837 C387.024126,263.349837 374.967089,260.854944 374.967089,276.226144 C374.967089,291.597344 374.967089,316.014735 392.454106,322.367914 Z" id="Oval-2" fill="#8EECE4"></path>
                        <polygon id="Rectangle-2" fill="#FFFFFF" points="28.3577236 49.8824219 397.00813 23.6040365 397.00813 294.429297 28.3577236 268.150911"></polygon>
                        <path d="M156.096192,310.559905 C186.291854,299.088793 201.389685,265.807714 201.389685,210.716667 C196.888085,254.071606 176.983752,275.749076 141.676685,275.749076 C78.7956066,275.749076 35.4471545,218.711189 35.4471545,231.270955 C35.4471545,237.475009 53.2470669,248.376912 85.3424536,285.761707 C117.43784,323.146501 133.931951,318.979939 156.096192,310.559905 Z" id="Oval-3" fill="#F69D62"></path>
                        <g id="Oval-2">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#feature2-path-1"></use>
                            <use fill="#CB98EB" fill-rule="evenodd" xlink:href="#feature2-path-1"></use>
                        </g>
                        <path d="M301.563898,185.721147 C310.920186,187.195678 316.911802,184.038629 319.538747,176.25 C325.022468,183.608542 331.91737,187.287814 340.22345,187.287814 C348.601533,187.287814 355.724196,183.869654 361.591438,177.033333 C366.249416,183.869654 372.557901,187.287814 380.516895,187.287814 C389.367607,187.287814 395.757325,184.942812 399.686052,180.252809 C402.614135,184.942812 407.189956,187.287814 413.413516,187.287814" id="Line" stroke="#CB98EB" stroke-width="3" stroke-linecap="square"></path>
                        <path d="M301.563898,238.20448 C310.920186,239.679012 316.911802,236.521963 319.538747,228.733333 C325.022468,236.091876 331.91737,239.771147 340.22345,239.771147 C348.601533,239.771147 355.724196,236.352987 361.591438,229.516667 C366.249416,236.352987 372.557901,239.771147 380.516895,239.771147 C389.367607,239.771147 395.757325,237.426145 399.686052,232.736142 C402.614135,237.426145 407.189956,239.771147 413.413516,239.771147" id="Line" stroke="#CB98EB" stroke-width="3" stroke-linecap="square"></path>
                        <path d="M301.563898,212.35448 C310.920186,213.829012 316.911802,210.671963 319.538747,202.883333 C325.022468,210.241876 331.91737,213.921147 340.22345,213.921147 C348.601533,213.921147 355.724196,210.502987 361.591438,203.666667 C366.249416,210.502987 372.557901,213.921147 380.516895,213.921147 C389.367607,213.921147 395.757325,211.576145 399.686052,206.886142 C402.614135,211.576145 407.189956,213.921147 413.413516,213.921147" id="Line" stroke="#8EECE4" stroke-width="3" stroke-linecap="square"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
<div>
  <h2>feature 1</h2>
  <description>
  In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.….
  </description>
</div>
    </section>
    <section class="feature">

<svg id="anime-2" width="436px" height="326px" viewBox="0 0 436 326" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M95.0272411,328.394615 C98.1137718,329.633996 99.7149691,329.01099 102.43608,326.149438 C104.362779,324.123298 107.136752,318.652135 107.136752,316.400319 C107.136752,310.968225 103.281598,307.537965 98.2863219,307.537965 C93.2910455,307.537965 89.4358974,306.656284 89.4358974,312.088378 C89.4358974,317.520472 89.4358974,326.149438 95.0272411,328.394615 Z" id="feature3-path-1"></path>
        <filter x="-39.5%" y="-23.2%" width="179.1%" height="165.1%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M284.598108,83.5263487 C295.133558,87.6961566 295.133558,87.6961566 309.887165,75.9726156 C317.02514,70.3006232 327.375452,50.5348355 325.932268,43.1724165 C322.818184,27.2858784 313.083905,18.9132516 295.722534,13.3556745 C278.361164,7.79809741 265.512821,10.3893248 265.512821,28.6652076 C265.512821,46.9410903 265.512821,75.9726156 284.598108,83.5263487 Z" id="path-3"></path>
        <filter x="-11.6%" y="-6.6%" width="123.1%" height="118.6%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-805.000000, -1330.000000)">
            <g id="feature-2" transform="translate(258.000000, 1321.000000)">
                <g id="feature-2-text">
                    <g id="Group2" transform="translate(547.000000, 0.000000)">
                        <g id="Group">
                            <path d="M431.397605,115.643052 C449.604515,106.532758 407.165524,87.6373049 418.166896,52.5552168 C419.951701,42.939855 431.397605,19.9591645 418.166896,13.9815121 C404.936186,-1.12256338 351.464926,29.0855876 326.576219,43.6204993 C299.432565,59.4722914 286.287547,69.2463539 291.970098,80.3104717 C301.479635,98.8258582 419.697494,115.643052 431.397605,115.643052 Z" id="Oval" fill-opacity="0.78014606" fill="#FECF5C"></path>
                            <path d="M21.1138987,275.948507 C39.3253572,275.948507 36.382208,277.718793 45.2450847,269.500156 C51.5205012,263.680898 60.5555556,247.967223 60.5555556,241.499804 C60.5555556,225.898339 47.9990079,216.046322 31.7289885,216.046322 C15.4589691,216.046322 10.447074,216.731237 2.90244019,229.11552 C-4.64219363,241.499804 2.90244019,275.948507 21.1138987,275.948507 Z" id="Oval-2" fill="#8EECE4"></path>
                            <polygon id="Rectangle-2" fill="#FFFFFF" points="23.2905983 40.2972152 408.982906 61.643964 408.982906 280.740597 23.2905983 302.162414"></polygon>
                            <g id="Oval-2">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#feature3-path-1"></use>
                                <use fill="#CB98EB" fill-rule="evenodd" xlink:href="#feature3-path-1"></use>
                            </g>
                            <g id="Oval-2" transform="translate(295.790598, 48.408719) rotate(-35.000000) translate(-295.790598, -48.408719) ">
                                <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                                <use fill="#CB98EB" fill-rule="evenodd" xlink:href="#path-3"></use>
                            </g>
                            <path d="M257.128205,292.223304 C274.4575,279.264284 285.406288,266.721185 289.974568,254.594005 L323.273504,272.784774 C308.172262,290.15676 297.072616,303.217603 289.974568,311.967302 C283.728479,300.340374 250.722555,292.223304 263.229239,292.223304" id="Line" stroke="#CB98EB" stroke-width="3" stroke-linecap="square"></path>
                            <path d="M286.008547,291.932883 C310.416004,272.899322 325.836832,254.476645 332.27103,236.66485 L379.17094,263.382542 C357.901584,288.897647 342.268281,308.080759 332.27103,320.93188 C323.473722,303.85483 276.986505,291.932883 294.601552,291.932883" id="Line" stroke="#8EECE4" stroke-width="3" stroke-linecap="square"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
      <div>
        <h2>feature 2</h2>
        <description>
        In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.….
        </description>
      </div>
       
    </section>
    <section class="feature">
    
<svg id="anime-3" width="461px" height="280px" viewBox="0 0 461 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M409.844689,103.057904 C420.247325,106.938748 457,101.840921 457,65.4563311 C457,29.0717412 391,32.1971045 391,49.2064858 C391,66.2158671 391,96.0276378 409.844689,103.057904 Z" id="feature4-path-1"></path>
        <filter x="-10.6%" y="-7.4%" width="121.2%" height="120.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M199.591344,243.909601 C202.677874,245.148983 204.279072,244.525977 207.000182,241.664425 C208.926882,239.638284 211.700855,234.167121 211.700855,231.915305 C211.700855,226.483211 207.845701,223.052951 202.850424,223.052951 C197.855148,223.052951 194,222.171271 194,227.603365 C194,233.035459 194,241.664425 199.591344,243.909601 Z" id="path-3"></path>
        <filter x="-39.5%" y="-23.2%" width="179.1%" height="165.1%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-230.000000, -1778.000000)">
            <g id="feature-3" transform="translate(230.000000, 1765.000000)">
                <g id="feature-1-text">
                    <g id="Group-3">
                        <g id="Group" transform="translate(0.000000, 13.000000)">
                            <path d="M240.078871,272.109314 C253.848686,264.219806 152.103219,191.194676 81.5011817,157.322502 C58.7508489,146.407756 31.7539063,146.407756 13.8058692,135.821445 C-10.734375,115.91068 2.2713379,266.77367 21.2194956,252.303472 C65.3171518,218.627281 72.8249643,286.31494 116.274183,279.516376 C142.157316,275.466404 175.549016,266.186869 199.336683,272.109314 C229.087363,279.516376 229.087363,272.109314 240.078871,272.109314 Z" id="Oval" fill-opacity="0.78014606" fill="#FECF5C"></path>
                            <g id="Oval-2">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#feature4-path-1"></use>
                                <use fill="#F69D62" fill-rule="evenodd" xlink:href="#feature4-path-1"></use>
                            </g>
                            <polygon id="Rectangle-2" fill="#FFFFFF" points="39 38.688608 424 0 424 256.71745 39 215.98876"></polygon>
                            <path d="M38.09375,144.726562 C68.9804688,160.90625 93.3867188,108.414472 93.3867187,92.734375 C93.3867187,77.1345884 72.1879881,72.6992187 55.9179688,72.6992187 C39.6479494,72.6992187 7.44916101,72.6992187 7.44921875,88.8828125 C7.44921875,105.066406 7.20703125,128.546875 38.09375,144.726562 Z" id="Oval-2" fill="#8EECE4"></path>
                            <g id="Oval-2">
                                <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                                <use fill="#CB98EB" fill-rule="evenodd" xlink:href="#path-3"></use>
                            </g>
                            <g id="Group-2" transform="translate(273.000000, 150.000000)" stroke="#CB98EB" stroke-linecap="square" stroke-width="3">
                                <path d="M41.5,29.5 C50.6132812,38.2929688 100,57.5 80.5,57.5" id="Line-2"></path>
                                <path d="M33,16.7890625 C43.8933197,34.8460519 88.4726562,60.8792256 81.2226562,75.7425068" id="Line-2" transform="translate(57.507697, 46.265785) scale(1, -1) translate(-57.507697, -46.265785) "></path>
                                <path d="M0.128205128,58.3507904 C30.2232719,38.2555699 49.2375768,18.8053065 57.1711201,0 L115,28.2079597 C88.774299,55.1462535 69.4980057,75.3993678 57.1711201,88.9673025 C46.3237967,70.937723 -10.9962207,58.3507904 10.7236171,58.3507904" id="Line"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    <div>
      <h2>feature 3</h2>
      <description>
      In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content.….
      </description>
    </div>
    </section>
     <div class="footer-background">
   


<svg width="100%"  viewBox="0 0 1360 237" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-41.000000, -2384.000000)" fill="#5D2B7C">
            <g id="Footer" transform="translate(41.000000, 2384.000000)">
                <path d="M49.277265,15.9956776 C130.537011,-29.3626715 1017.77221,35.4207777 1360,86.7322028 C1360,109.312891 1360,140.379201 1360,161.785476 C1360,181.243797 1360,206.315305 1360,237 L0,237 C0,198.345816 0,165.452961 0,138.321434 C0,58.843277 21.7085957,33.8503544 49.277265,15.9956776 Z"></path>
            </g>
        </g>
    </g>
</svg>
  <div class="text">
    <div class="copyright">

<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-200.000000, -2560.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Footer" transform="translate(41.000000, 2384.000000)">
                <g id="copyright" transform="translate(159.000000, 176.000000)">
                    <g id="Capa_1">
                        <g id="Group">
                            <path d="M9.98967509,0 C4.48129964,0 0,4.48129964 0,9.98967509 C0,15.4980505 4.48129964,19.9793502 9.98967509,19.9793502 C15.4980505,19.9793502 19.9793502,15.4980505 19.9793502,9.98967509 C19.9793502,4.48129964 15.4980505,0 9.98967509,0 Z M9.98967509,18.6797834 C5.19797834,18.6797834 1.29963899,14.781444 1.29963899,9.98967509 C1.29963899,5.19790614 5.19797834,1.29963899 9.98967509,1.29963899 C14.7813718,1.29963899 18.6797112,5.19797834 18.6797112,9.98967509 C18.6797112,14.7813718 14.781444,18.6797834 9.98967509,18.6797834 Z" id="Shape"></path>
                            <path d="M14.0648375,11.6175451 C13.7624549,11.4242599 13.3606498,11.5125632 13.1672202,11.8148014 C12.5394946,12.7962455 11.4702527,13.3821661 10.3070036,13.3821661 C8.43638989,13.3821661 6.91458484,11.8602888 6.91458484,9.98967509 C6.91458484,8.11906137 8.43638989,6.59718412 10.3070036,6.59718412 C11.4357401,6.59718412 12.487509,7.1565343 13.1205776,8.0934296 C13.321444,8.39068592 13.7252708,8.46895307 14.0228159,8.26801444 C14.3201444,8.06714801 14.3983394,7.6631769 14.1974007,7.36577617 C13.3224549,6.07068592 11.8680144,5.29754513 10.3070036,5.29754513 C7.71978339,5.29754513 5.61494585,7.40238267 5.61494585,9.98967509 C5.61494585,12.5769675 7.71978339,14.6818051 10.3070036,14.6818051 C11.9157401,14.6818051 13.394296,13.8718412 14.2620939,12.5150903 C14.4554513,12.2127798 14.367148,11.8109747 14.0648375,11.6175451 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
      2018 Isa. All rights reserved
    </div>
    <div class="social-media>
      
<svg width="20px" height="40px" viewBox="0 0 20 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-1139.000000, -2542.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Footer" transform="translate(41.000000, 2384.000000)">
                <g id="social-media" transform="translate(1098.000000, 158.000000)">
                    <g id="facebook">
                        <path d="M11.9601757,40 L6.4969948,40 C5.58446924,40 4.84216376,39.1296387 4.84216376,38.0596923 L4.84216376,23.6114502 L1.6548311,23.6114502 C0.742305474,23.6114502 0,22.7407837 0,21.6711426 L0,15.4800415 C0,14.4100952 0.742305474,13.5397339 1.6548311,13.5397339 L4.84216376,13.5397339 L4.84216376,10.4394531 C4.84216376,7.3654175 5.6654149,4.75006102 7.22264271,2.87658688 C8.7868979,0.994567891 10.9729511,0 13.5444722,0 L17.710961,0.00793453125 C18.6219249,0.009765625 19.362929,0.880126953 19.362929,1.94824219 L19.362929,7.6965332 C19.362929,8.76647953 18.6208838,9.63684078 17.7086185,9.63684078 L14.9033701,9.63806156 C14.0478448,9.63806156 13.8299943,9.83917234 13.783405,9.90081789 C13.7066238,10.0030517 13.6152671,10.2920532 13.6152671,11.0900879 L13.6152671,13.5394287 L17.4977954,13.5394287 C17.7900847,13.5394287 18.0732643,13.6239624 18.3166219,13.7832641 C18.8415974,14.1271973 19.1679827,14.7775269 19.1679827,15.4803467 L19.1659005,21.6714477 C19.1659005,22.7407837 18.423595,23.611145 17.5110694,23.611145 L13.6152671,23.611145 L13.6152671,38.0596923 C13.6152671,39.1296387 12.8727013,40 11.9601757,40 Z M32.999515,3.52935797 L33,3.52935797 L32.999515,3.52935797 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    </div>
  </div>
   <div class="purple"></div>
  </div>
  </div>
 
</main>
`;

  return element;
};
