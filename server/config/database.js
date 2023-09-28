const { Pool } = require('pg');

const pool = new Pool({
    user: 'db_user',
    host: 'db_host',
    database: 'db_name',
    password: 'db_password',
    port: 'db_port',
  });

module.exports = pool;
