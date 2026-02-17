module.exports = {
  apps: [
    {
      name: 'aurous-pragyan',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/aurous-pragyan',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_BASE_URL: 'https://prodapi.classiolabs.com/',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '1G',
      restart_delay: 4000,
      listen_timeout: 10000,
      kill_timeout: 5000,
    },
  ],
};
