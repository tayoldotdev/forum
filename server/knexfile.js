// Update with your config settings.

module.exports = {

  
  development: {
    client: 'postgresql',
    connection: {
      host:'192.168.1.11',
      database: 'myforum',
      user: 'ubuntu',
      password: 'admin'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: 'ec2-54-243-67-199.compute-1.amazonaws.com',
      database: 'd46i3end27svki',
      user: 'mtmxdsdgvqqaje',
      password: 'af3c004e1663fa5a78b52a578fe93f87b32d386cc8d6b5713074d84f0dff3e69'
    }
  }
};

//'postgres://postgres:<password>@localhost/smartbrain1'