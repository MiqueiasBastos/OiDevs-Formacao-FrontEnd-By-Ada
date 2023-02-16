export const Icon = ({
    name,
    color = "#FFF",
    size = 32,
    label = "",
    ...rest
}) => {
    const icons = {
        create: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path
                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="6.545"
                    x2="17.455"
                    y1="12.001"
                    y2="12.001"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="12.003"
                    x2="12.003"
                    y1="6.545"
                    y2="17.455"
                ></line>
            </svg>
        ),
        discovery: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <polygon
                    fill="none"
                    points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></polygon>
                <polygon
                    fillRule="evenodd"
                    points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                    cx="12.001"
                    cy="12.005"
                    fill="none"
                    r="10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></circle>
            </svg>
        ),
        follow: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 48 48"
                {...rest}
            >
                <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
            </svg>
        ),
        home: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path
                    d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
            </svg>
        ),
        messages: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path
                    d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.739"
                ></path>
                <path
                    d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                    fillRule="evenodd"
                ></path>
            </svg>
        ),
        notifications: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
        ),
        reels: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="2.049"
                    x2="21.95"
                    y1="7.002"
                    y2="7.002"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="13.504"
                    x2="16.362"
                    y1="2.001"
                    y2="7.002"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="7.207"
                    x2="10.002"
                    y1="2.11"
                    y2="7.002"
                ></line>
                <path
                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <path
                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                    fillRule="evenodd"
                ></path>
            </svg>
        ),
        search: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"
                ></line>
            </svg>
        ),
        posts: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                ></rect>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                ></line>
            </svg>
        ),
        pinned: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z"></path>
            </svg>
        ),
        menu: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="3"
                    x2="21"
                    y1="4"
                    y2="4"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="3"
                    x2="21"
                    y1="12"
                    y2="12"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="3"
                    x2="21"
                    y1="20"
                    y2="20"
                ></line>
            </svg>
        ),
        marked: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path
                    d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></circle>
            </svg>
        ),
        arrowDown: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path d="M2.99998 6.49799C3.13132 6.49786 3.26138 6.52367 3.38271 6.57395C3.50404 6.62424 3.61424 6.69799 3.70698 6.79099L12 15.087L20.293 6.79099C20.3852 6.69548 20.4956 6.6193 20.6176 6.56689C20.7396 6.51448 20.8708 6.4869 21.0036 6.48574C21.1364 6.48459 21.268 6.50989 21.3909 6.56017C21.5138 6.61045 21.6255 6.68471 21.7194 6.7786C21.8133 6.87249 21.8875 6.98414 21.9378 7.10704C21.9881 7.22994 22.0134 7.36162 22.0122 7.4944C22.0111 7.62718 21.9835 7.75839 21.9311 7.8804C21.8787 8.0024 21.8025 8.11275 21.707 8.20499L12.707 17.209C12.5158 17.3894 12.2629 17.49 12 17.49C11.7371 17.49 11.4842 17.3894 11.293 17.209L2.29298 8.20499C2.15317 8.06514 2.05796 7.88698 2.0194 7.69302C1.98083 7.49907 2.00063 7.29804 2.0763 7.11534C2.15197 6.93264 2.28011 6.77648 2.44452 6.66659C2.60893 6.55671 2.80223 6.49803 2.99998 6.49799Z" />
            </svg>
        ),
        options: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
        ),
        logout: (
            <svg
                color={color}
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                height={size}
                viewBox="0 0 512 512"
                {...rest}
            >
                <path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L377 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273zM168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l80 0z" />
            </svg>
        ),
        close: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <polyline
                    fill="none"
                    points="20.643 3.357 12 12 3.353 20.647"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                ></polyline>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    x1="20.649"
                    x2="3.354"
                    y1="20.649"
                    y2="3.354"
                ></line>
            </svg>
        ),
        emoji: (
            <svg
                color={color}
                fill={color}
                height={size}
                aria-label={label}
                viewBox="0 0 24 24"
                {...rest}
            >
                <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>
        ),
    };

    return icons[name];
};
