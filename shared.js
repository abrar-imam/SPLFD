// Shared data and utilities
let users = JSON.parse(localStorage.getItem('users')) || {
    admin: { password: 'admin123', isAdmin: true },
    user: { password: 'user123', isAdmin: false }
};
let projects = JSON.parse(localStorage.getItem('projects')) || {
    'Project1': {
        'file1.txt': 'https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7',
        'file2.pdf': 'https://drive.google.com/file/d/2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P8Q9'
    },
    'Project2': {
        'doc1.docx': 'https://drive.google.com/file/d/3C4D5E6F7G8H9I0J1K2L3M4N5O6P8Q9R0'
    }
};
let loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];

function saveData() {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
}

function logout() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        const lastLogin = loginHistory.find(entry => entry.username === currentUser && !entry.logoutTime);
        if (lastLogin) {
            lastLogin.logoutTime = new Date().toLocaleString();
            saveData();
        }
        sessionStorage.removeItem('currentUser');
    }
    window.location.href = 'index.html';
}

