'use client'

import React from 'react'

interface LeafGraphicProps {
  side: 'left' | 'right'
  layer: 'back' | 'mid' | 'front'
  className?: string
  style?: React.CSSProperties
}

export function LeafGraphic({ side, layer, className, style }: LeafGraphicProps) {
  const isLeft = side === 'left'

  const configs = {
    back: {
      baseColor1: '#0a1a08', baseColor2: '#122210', baseColor3: '#1a3318',
      sheen1: 'rgba(80,130,55,0.12)', sheen2: 'rgba(20,45,15,0.7)',
      opacity: 0.65, blur: 2,
      shadow: '0 20px 60px rgba(0,0,0,0.8)',
    },
    mid: {
      baseColor1: '#0f2010', baseColor2: '#1e4019', sheen1: 'rgba(110,170,75,0.22)',
      baseColor3: '#2a5522', sheen2: 'rgba(25,55,18,0.55)',
      opacity: 0.85, blur: 0.5,
      shadow: '0 25px 55px rgba(0,0,0,0.9)',
    },
    front: {
      baseColor1: '#081208', baseColor2: '#162a12', baseColor3: '#1f3d18',
      sheen1: 'rgba(145,200,100,0.35)', sheen2: 'rgba(12,30,10,0.7)',
      opacity: 1, blur: 0,
      shadow: '0 30px 70px rgba(0,0,0,0.98), 0 0 40px rgba(232,98,44,0.08) inset',
    },
  }
  const c = configs[layer]

  const uid = `${side}-${layer}`

  // Different shapes per layer for true parallax variety
  const frontPath = `M 0,0 L 820,0 C 920,30 980,100 1000,200 C 1005,235 975,265 910,258 C 840,250 770,210 700,185 C 810,258 950,325 985,425 C 998,462 962,495 895,488 C 815,480 735,428 660,392 C 780,478 935,545 970,650 C 988,695 948,730 878,720 C 790,710 698,645 620,600 C 745,698 905,768 935,868 C 948,915 908,952 832,940 C 745,927 648,850 568,795 C 670,900 820,970 845,1068 C 858,1118 808,1155 730,1132 C 643,1107 548,1018 465,948 C 520,1050 596,1148 528,1215 C 484,1260 388,1258 312,1200 C 225,1138 148,1038 72,958 C 80,1068 48,1188 0,1200 Z`
  const midPath = `M 0,0 L 760,0 C 875,25 955,115 978,225 C 990,265 955,300 882,290 C 802,280 724,232 650,202 C 768,278 918,348 948,458 C 962,498 924,532 852,522 C 768,510 682,452 602,412 C 728,502 895,578 928,688 C 944,735 902,772 828,758 C 736,742 638,670 554,620 C 684,722 858,800 888,908 C 902,958 858,998 778,982 C 685,964 582,880 495,820 C 552,928 635,1038 560,1112 C 512,1162 408,1162 325,1098 C 232,1030 148,924 58,838 C 65,952 30,1075 0,1120 Z`
  const backPath = `M 0,0 L 700,0 C 830,40 920,140 942,258 C 952,300 914,338 836,325 C 750,310 664,255 580,222 C 704,302 868,378 898,495 C 912,538 870,575 792,562 C 702,548 608,485 520,442 C 648,538 828,620 858,738 C 872,785 826,825 744,808 C 645,788 542,710 450,655 C 582,762 770,848 798,966 C 812,1018 762,1062 675,1042 C 576,1020 465,928 372,862 C 432,975 520,1092 438,1172 C 386,1228 272,1228 185,1158 C 88,1082 0,958 0,958 Z`

  const shapePath = layer === 'front' ? frontPath : layer === 'mid' ? midPath : backPath

  return (
    <svg
      viewBox="0 0 1000 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{
        transform: isLeft ? 'none' : 'scaleX(-1)',
        filter: `drop-shadow(${c.shadow}) ${c.blur > 0 ? `blur(${c.blur}px)` : ''}`,
        opacity: c.opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`base-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.baseColor1} />
          <stop offset="45%" stopColor={c.baseColor2} />
          <stop offset="100%" stopColor={c.baseColor3} />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="25%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" stopColor={c.sheen1} />
          <stop offset="100%" stopColor={c.sheen2} />
        </linearGradient>
        <linearGradient id={`midrib-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#142211" />
          <stop offset="50%" stopColor="#3d5a28" />
          <stop offset="100%" stopColor="#8db860" />
        </linearGradient>
        {layer === 'front' && (
          <filter id={`emberEdge-${uid}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feFlood floodColor="rgba(232,98,44,0.15)" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        )}
      </defs>

      {/* Dark base fill to guarantee no gap at edges */}
      <path d={`M 0,0 L 1000,0 L 1000,1200 L 0,1200 Z`} fill="#050a04" opacity="0.95" />

      {/* Main leaf silhouette */}
      <path
        d={shapePath}
        fill={`url(#base-${uid})`}
        filter={layer === 'front' ? `url(#emberEdge-${uid})` : undefined}
      />

      {/* Sheen / sunlight overlay */}
      <path d={shapePath} fill={`url(#sheen-${uid})`} />

      {/* Monstera fenestrations (holes) — only on front and mid */}
      {layer !== 'back' && (
        <g fill="#030805" opacity="0.92">
          <ellipse cx="680" cy="245" rx="14" ry="52" transform="rotate(-38 680 245)" />
          <ellipse cx="755" cy="435" rx="20" ry="70" transform="rotate(-30 755 435)" />
          <ellipse cx="790" cy="640" rx="22" ry="88" transform="rotate(-20 790 640)" />
          <ellipse cx="718" cy="825" rx="18" ry="68" transform="rotate(-10 718 825)" />
          <ellipse cx="565" cy="960" rx="14" ry="48" transform="rotate(4 565 960)" />
          {layer === 'front' && (
            <>
              <ellipse cx="448" cy="730" rx="12" ry="36" transform="rotate(-22 448 730)" />
              <ellipse cx="540" cy="510" rx="15" ry="42" transform="rotate(-32 540 510)" />
            </>
          )}
        </g>
      )}

      {/* Central midrib vein */}
      <path
        d="M 0,0 C 180,260 420,570 650,910 C 718,1018 785,1115 830,1200"
        stroke={`url(#midrib-${uid})`}
        strokeWidth={layer === 'front' ? '36' : layer === 'mid' ? '28' : '20'}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 0,0 C 180,260 420,570 650,910 C 718,1018 785,1115 830,1200"
        stroke="rgba(210,248,175,0.4)"
        strokeWidth={layer === 'front' ? '9' : '6'}
        strokeLinecap="round"
        fill="none"
      />

      {/* Lateral veins */}
      {layer !== 'back' && (
        <path
          d="M 100,130 Q 360,175 610,215 M 200,270 Q 460,335 720,405 M 300,440 Q 550,505 775,585 M 400,600 Q 635,655 820,735 M 490,748 Q 668,808 775,875 M 560,865 Q 672,925 718,988"
          stroke={`rgba(130,185,95,${layer === 'front' ? 0.35 : 0.2})`}
          strokeWidth={layer === 'front' ? '10' : '7'}
          strokeLinecap="round"
          fill="none"
        />
      )}
    </svg>
  )
}
