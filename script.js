// API Configuration
const API_URL = 'https://ipinfo.io/';
const API_TOKEN = ''; // Free tier doesn't require token for basic usage

// Country name mapping
const countryNames = {
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua and Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BQ': 'Bonaire, Sint Eustatius and Saba',
    'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'CV': 'Cabo Verde',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'KY': 'Cayman Islands',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Congo',
    'CD': 'Congo, Democratic Republic of the',
    'CK': 'Cook Islands',
    'CR': 'Costa Rica',
    'CI': "Côte d'Ivoire",
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CW': 'Curaçao',
    'CY': 'Cyprus',
    'CZ': 'Czechia',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'SZ': 'Eswatini',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (Malvinas)',
    'FO': 'Faroe Islands',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island and McDonald Islands',
    'VA': 'Holy See',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran, Islamic Republic of',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KP': "Korea, Democratic People's Republic of",
    'KR': 'Korea, Republic of',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': "Lao People's Democratic Republic",
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia, Federated States of',
    'MD': 'Moldova, Republic of',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'MK': 'North Macedonia',
    'MP': 'Northern Mariana Islands',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestine, State of',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'RE': 'Réunion',
    'RO': 'Romania',
    'RU': 'Russian Federation',
    'RW': 'Rwanda',
    'BL': 'Saint Barthélemy',
    'SH': 'Saint Helena, Ascension and Tristan da Cunha',
    'KN': 'Saint Kitts and Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin (French part)',
    'PM': 'Saint Pierre and Miquelon',
    'VC': 'Saint Vincent and the Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome and Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SX': 'Sint Maarten (Dutch part)',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands',
    'SS': 'South Sudan',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SJ': 'Svalbard and Jan Mayen',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan, Province of China',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania, United Republic of',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad and Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks and Caicos Islands',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom of Great Britain and Northern Ireland',
    'UM': 'United States Minor Outlying Islands',
    'US': 'United States of America',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela, Bolivarian Republic of',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.',
    'WF': 'Wallis and Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe'
};

// Global variable for time interval
let timeInterval = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Get user's IP on page load
    getUserIP();
    
    // Add event listeners
    document.getElementById('ipInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            lookupIP();
        }
    });
});

// Get user's IP
function getUserIP() {
    const userIPElement = document.getElementById('userIP');
    userIPElement.textContent = 'Loading...';
    
    fetch(`${API_URL}json?token=${API_TOKEN}`)
        .then(response => response.json())
        .then(data => {
            userIPElement.textContent = data.ip;
        })
        .catch(error => {
            userIPElement.textContent = 'Unavailable';
            console.error('Error fetching user IP:', error);
        });
}

// Main lookup function
async function lookupIP() {
    const ipInput = document.getElementById('ipInput').value.trim();
    const ip = ipInput || '';
    
    // Clear any existing time interval
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }
    
    // Show loading state
    showLoading();
    
    try {
        const response = await fetch(`${API_URL}${ip}/json?token=${API_TOKEN}`);
        const data = await response.json();
        
        if (data.ip) {
            displayResults(data);
        } else {
            showError(data.error?.message || 'Failed to fetch IP information');
        }
    } catch (error) {
        showError('Network error. Please check your connection and try again.');
    }
}

// Display results
function displayResults(data) {
    // Hide loading and show results
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    document.getElementById('resultsSection').classList.add('fade-in');
    
    // Update displayed IP
    document.getElementById('displayedIP').textContent = data.ip;
    
    // Update ISP info
    document.getElementById('org').textContent = data.org || 'N/A';
    
    // Update location info
    const countryCode = data.country;
    const countryFullName = countryNames[countryCode] || countryCode;
    document.getElementById('country').textContent = countryFullName;
    document.getElementById('region').textContent = data.region;
    document.getElementById('city').textContent = data.city;
    document.getElementById('postal').textContent = data.postal || 'N/A';
    document.getElementById('timezone').textContent = data.timezone;
    
    // Update coordinates
    const loc = data.loc ? data.loc.split(',') : [null, null];
    document.getElementById('lat').textContent = loc[0] || 'N/A';
    document.getElementById('lon').textContent = loc[1] || 'N/A';
    
    // Update map link
    if (loc[0] && loc[1]) {
        const mapLink = `https://www.openstreetmap.org/?mlat=${loc[0]}&mlon=${loc[1]}&zoom=10`;
        document.getElementById('mapLink').href = mapLink;
    }
    
    // Update map
    updateMap(loc[0], loc[1], data.city, countryFullName);
    
    // Start updating current time
    if (data.timezone) {
        startTimeUpdate(data.timezone);
    } else {
        document.getElementById('currentTime').textContent = 'N/A';
    }
}

// Start updating current time
function startTimeUpdate(timezone) {
    // Clear any existing interval
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    
    // Update time immediately
    updateTime(timezone);
    
    // Update time every second
    timeInterval = setInterval(() => {
        updateTime(timezone);
    }, 1000);
}

// Update current time
function updateTime(timezone) {
    try {
        const now = new Date();
        const options = {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const timeString = now.toLocaleTimeString('en-US', options);
        document.getElementById('currentTime').textContent = timeString;
    } catch (error) {
        document.getElementById('currentTime').textContent = 'Invalid timezone';
        if (timeInterval) {
            clearInterval(timeInterval);
            timeInterval = null;
        }
    }
}

// Update map
let map = null;
function updateMap(lat, lon, city, country) {
    const mapContainer = document.getElementById('mapContainer');
    
    if (!lat || !lon) {
        mapContainer.innerHTML = `
            <div class="h-full bg-gray-100 flex items-center justify-center">
                <div class="text-center">
                    <i class="fas fa-map-marked-alt text-4xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600">Location data not available</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Clear previous map
    mapContainer.innerHTML = '';
    
    // Initialize map
    map = L.map('mapContainer').setView([lat, lon], 10);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add marker
    L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${city || 'Location'}</b><br>${country || ''}`)
        .openPopup();
}

// Show loading state
function showLoading() {
    // Clear time interval when starting new lookup
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }
    
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('errorState').classList.add('hidden');
    document.getElementById('loadingState').classList.remove('hidden');
}

// Show error state
function showError(message) {
    // Clear time interval on error
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }
    
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('errorState').classList.remove('hidden');
    document.getElementById('errorMessage').textContent = message;
}

// Reset form
function resetForm() {
    // Clear time interval on reset
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }
    
    document.getElementById('errorState').classList.add('hidden');
    document.getElementById('ipInput').value = '';
    document.getElementById('ipInput').focus();
}

// Copy results to clipboard
function copyResults() {
    const ip = document.getElementById('displayedIP').textContent;
    const country = document.getElementById('country').textContent;
    const city = document.getElementById('city').textContent;
    const org = document.getElementById('org').textContent;
    const currentTime = document.getElementById('currentTime').textContent;
    
    const text = `IP Address: ${ip}\nLocation: ${city}, ${country}\nISP: ${org}\nCurrent Time: ${currentTime}`;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Results copied to clipboard!');
    });
}

// Share results
function shareResults() {
    const ip = document.getElementById('displayedIP').textContent;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'IP Radar Results',
            text: `IP Address: ${ip}`,
            url: url
        });
    } else {
        // Fallback: copy to clipboard
        copyResults();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg fade-in z-50';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
  }
