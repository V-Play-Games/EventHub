const dashboard = document.createElement('div');
dashboard.classList.add('dashboard');

// Sidebar
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
dashboard.appendChild(sidebar);

const sidebarItems = [
  { icon: 'fa-chart-line', text: 'Reports' },
  { icon: 'fa-archive', text: 'Archive' },
  { icon: 'fa-comment', text: 'Social' },
  { icon: 'fa-user', text: 'Users' },
  { icon: 'fa-file', text: 'Documents' },
  { icon: 'fa-star', text: 'Favorites' },
  { icon: 'fa-tools', text: 'Tools' },
  { icon: 'fa-cog', text: 'Settings' },
];

sidebarItems.forEach(item => {
  const sidebarItem = document.createElement('div');
  sidebarItem.classList.add('sidebar-item');
  sidebarItem.innerHTML = `
    <i class="fas ${item.icon}"></i>
    <span>${item.text}</span>
  `;
  sidebar.appendChild(sidebarItem);
});

// Content
const content = document.createElement('div');
content.classList.add('content');
dashboard.appendChild(content);

// Monthly Summary
const monthlySummary = document.createElement('div');
monthlySummary.classList.add('monthly-summary');
content.appendChild(monthlySummary);

const title = document.createElement('h2');
title.textContent = 'Monthly Summary';
monthlySummary.appendChild(title);

// Chart
const chart = document.createElement('canvas');
chart.id = 'monthly-chart';
monthlySummary.appendChild(chart);

// Chart Data
const data = {
  labels: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28',