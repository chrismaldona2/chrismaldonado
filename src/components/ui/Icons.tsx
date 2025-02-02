import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export const LocationIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M9.23076 8.30767C9.23076 8.63409 9.10109 8.94714 8.87028 9.17796C8.63947 9.40877 8.32642 9.53844 8 9.53844C7.67358 9.53844 7.36052 9.40877 7.12971 9.17796C6.8989 8.94714 6.76923 8.63409 6.76923 8.30767C6.76923 7.98125 6.8989 7.6682 7.12971 7.43739C7.36052 7.20657 7.67358 7.0769 8 7.0769C8.32642 7.0769 8.63947 7.20657 8.87028 7.43739C9.10109 7.6682 9.23076 7.98125 9.23076 8.30767Z"
        stroke="black"
        strokeWidth="2.46154"
        strokeLinejoin="round"
      />
      <path
        d="M14.7692 8.92304C14.7692 12.6621 12.3077 16.923 8 21.8461C3.69231 16.923 1.23077 12.6621 1.23077 8.92304C1.23077 7.12773 1.94396 5.40595 3.21344 4.13647C4.48291 2.86699 6.20469 2.15381 8 2.15381C9.79532 2.15381 11.5171 2.86699 12.7866 4.13647C14.0561 5.40595 14.7692 7.12773 14.7692 8.92304Z"
        stroke="black"
        strokeWidth="2.46154"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SunIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
      <rect width="120" height="120" fill="#FFFFAD" />
      <rect x="15" y="15" width="90" height="90" fill="white" />
    </svg>
  );
};

export const MoonIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
      <rect width="15" height="45" fill="#59637D" />
      <rect x="15" width="15" height="15" fill="#4C4F65" />
      <rect x="15" y="90" width="15" height="15" fill="#4C4F65" />
      <rect x="90" y="90" width="15" height="15" fill="#4C4F65" />
      <rect x="60" y="105" width="15" height="15" fill="#4C4F65" />
      <rect x="15" y="15" width="15" height="15" fill="#59667A" />
      <rect x="15" y="60" width="15" height="15" fill="#59667A" />
      <rect x="15" y="30" width="15" height="15" fill="#747C9E" />
      <rect x="30" y="75" width="15" height="15" fill="#EDF4FF" />
      <rect x="105" y="75" width="15" height="15" fill="#EDF4FF" />
      <rect x="105" y="60" width="15" height="15" fill="#949AAF" />
      <rect x="45" width="15" height="15" fill="#949AAF" />
      <rect x="90" y="15" width="15" height="30" fill="#949AAF" />
      <rect x="60" y="45" width="15" height="30" fill="#949AAF" />
      <rect
        width="60"
        height="15"
        transform="matrix(1 0 0 -1 45 90)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(1 0 0 -1 75 60)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(1 0 0 -1 30 75)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 45 30)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 75 15)"
        fill="#B8C0E2"
      />
      <rect x="60" y="30" width="15" height="15" fill="#EDF4FF" />
      <rect x="30" width="15" height="60" fill="#EDF4FF" />
      <rect x="105" width="15" height="60" fill="#EDF4FF" />
      <rect x="60" width="60" height="15" fill="#EDF4FF" />
      <rect x="45" y="15" width="30" height="15" fill="#EDF4FF" />
      <rect x="75" y="60" width="30" height="15" fill="#EDF4FF" />
      <rect x="15" y="75" width="15" height="15" fill="#747C9E" />
      <rect x="30" y="90" width="15" height="15" fill="#747C9E" />
      <rect x="105" y="90" width="15" height="15" fill="#747C9E" />
      <rect y="60" width="15" height="60" fill="#59637D" />
      <rect
        x="60"
        y="105"
        width="15"
        height="45"
        transform="rotate(90 60 105)"
        fill="#59637D"
      />
      <rect
        x="120"
        y="105"
        width="15"
        height="45"
        transform="rotate(90 120 105)"
        fill="#59637D"
      />
      <rect
        x="90"
        y="90"
        width="15"
        height="45"
        transform="rotate(90 90 90)"
        fill="#59637D"
      />
      <rect y="45" width="30" height="15" fill="#454B62" />
    </svg>
  );
};

export const GithubIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
    >
      <path
        d="M37 0.333313C32.1849 0.333313 27.4169 1.28172 22.9683 3.1244C18.5197 4.96707 14.4776 7.66792 11.0728 11.0727C4.19642 17.9491 0.333333 27.2754 0.333333 37C0.333333 53.2066 10.8567 66.9566 25.4133 71.8333C27.2467 72.1266 27.8333 70.99 27.8333 70V63.8033C17.6767 66.0033 15.5133 58.89 15.5133 58.89C13.8267 54.6366 11.4433 53.5 11.4433 53.5C8.10667 51.2266 11.7 51.3 11.7 51.3C15.3667 51.5566 17.31 55.0766 17.31 55.0766C20.5 60.65 25.89 59 27.98 58.12C28.31 55.7366 29.2633 54.1233 30.29 53.2066C22.15 52.29 13.6067 49.1366 13.6067 35.1666C13.6067 31.0966 15 27.8333 17.3833 25.23C17.0167 24.3133 15.7333 20.5 17.75 15.55C17.75 15.55 20.83 14.56 27.8333 19.29C30.73 18.4833 33.8833 18.08 37 18.08C40.1167 18.08 43.27 18.4833 46.1667 19.29C53.17 14.56 56.25 15.55 56.25 15.55C58.2667 20.5 56.9833 24.3133 56.6167 25.23C59 27.8333 60.3933 31.0966 60.3933 35.1666C60.3933 49.1733 51.8133 52.2533 43.6367 53.17C44.9567 54.3066 46.1667 56.5433 46.1667 59.9533V70C46.1667 70.99 46.7533 72.1633 48.6233 71.8333C63.18 66.92 73.6667 53.2066 73.6667 37C73.6667 32.1848 72.7183 27.4169 70.8756 22.9683C69.0329 18.5196 66.3321 14.4775 62.9273 11.0727C59.5224 7.66792 55.4803 4.96707 51.0317 3.1244C46.5831 1.28172 41.8151 0.333313 37 0.333313Z"
        fill="black"
      />
    </svg>
  );
};

export const LinkedinIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
    >
      <g clipPath="url(#clip0_54_5)">
        <path
          d="M65.9028 0.125C68.0834 0.125 70.1748 0.991267 71.7168 2.53323C73.2587 4.0752 74.125 6.16655 74.125 8.34722V65.9028C74.125 68.0834 73.2587 70.1748 71.7168 71.7168C70.1748 73.2587 68.0834 74.125 65.9028 74.125H8.34722C6.16655 74.125 4.0752 73.2587 2.53323 71.7168C0.991267 70.1748 0.125 68.0834 0.125 65.9028V8.34722C0.125 6.16655 0.991267 4.0752 2.53323 2.53323C4.0752 0.991267 6.16655 0.125 8.34722 0.125H65.9028ZM63.8472 63.8472V42.0583C63.8472 38.5038 62.4352 35.0949 59.9218 32.5815C57.4084 30.0681 53.9995 28.6561 50.445 28.6561C46.9506 28.6561 42.8806 30.7939 40.9072 34.0006V29.4372H29.4372V63.8472H40.9072V43.5794C40.9072 40.4139 43.4561 37.8239 46.6217 37.8239C48.1481 37.8239 49.6121 38.4303 50.6915 39.5097C51.7708 40.589 52.3772 42.053 52.3772 43.5794V63.8472H63.8472ZM16.0761 22.9828C17.9079 22.9828 19.6646 22.2551 20.9599 20.9599C22.2551 19.6646 22.9828 17.9079 22.9828 16.0761C22.9828 12.2528 19.8994 9.12833 16.0761 9.12833C14.2334 9.12833 12.4663 9.86033 11.1633 11.1633C9.86033 12.4663 9.12833 14.2334 9.12833 16.0761C9.12833 19.8994 12.2528 22.9828 16.0761 22.9828ZM21.7906 63.8472V29.4372H10.4028V63.8472H21.7906Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_54_5">
          <rect width="74" height="74" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GmailIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="74"
      height="60"
      viewBox="0 0 74 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
    >
      <g clipPath="url(#clip0_69_21)">
        <path
          d="M62.9 0H11.1C8.1561 0 5.33277 1.16946 3.25112 3.25112C1.16946 5.33277 0 8.1561 0 11.1V48.1C0 51.0439 1.16946 53.8672 3.25112 55.9489C5.33277 58.0305 8.1561 59.2 11.1 59.2H62.9C65.8439 59.2 68.6672 58.0305 70.7489 55.9489C72.8305 53.8672 74 51.0439 74 48.1V11.1C74 8.1561 72.8305 5.33277 70.7489 3.25112C68.6672 1.16946 65.8439 0 62.9 0ZM62.9 7.4L38.85 23.939C38.2875 24.2637 37.6495 24.4347 37 24.4347C36.3505 24.4347 35.7125 24.2637 35.15 23.939L11.1 7.4H62.9Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_69_21">
          <rect width="74" height="59.2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
