import React from 'react';

const Logo = ({ className }) => (
  <svg className={className} width="82" height="89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path fillRule="evenodd" clipRule="evenodd" d="M41 70c12.15 0 22-9.85 22-22s-9.85-22-22-22-22 9.85-22 22 9.85 22 22 22z" fill="#000" fillOpacity=".01"/>
    </g>
    <g filter="url(#filter1_d)">
      <path fillRule="evenodd" clipRule="evenodd" d="M41 70c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30z" fill="#2196F3"/>
      <path d="M69 40c0 15.464-12.536 28-28 28S13 55.464 13 40s12.536-28 28-28 28 12.536 28 28z" stroke="#42A5F5" strokeWidth="4"/>
    </g>
    <mask id="a" maskUnits="userSpaceOnUse" x="11" y="10" width="60" height="60">
      <path fillRule="evenodd" clipRule="evenodd" d="M41 70c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30z" fill="#fff"/>
    </mask>
    <g mask="url(#a)" stroke="#42A5F5" strokeWidth="4">
      <path d="M13.714 32.875h53.822M13.714 48.625h53.822" strokeLinecap="square"/>
      <path d="M40.25 14.5s-9.962 11.578-9.747 26.25C30.72 55.422 40.25 65.5 40.25 65.5M41 14.5s9.962 11.578 9.746 26.25C50.531 55.422 41 65.5 41 65.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="filter0_d" x="8" y="23" width="66" height="66" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="8"/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter1_d" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.3 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

export default Logo;
