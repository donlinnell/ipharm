module.exports = {
  port: 8081,
  db: {
    'database': 'ipharm',
    'user': 'sa',
    'password': 'sa101',
    'options': {
      'host': 'localhost',
      'dialect': 'mssql',
      'port': '1433',
      'operatorsAliases': false,
      'dialectOptions': {
        'encrypt': false,
        'instanceName': 'MSSQLSERVER'
      }
    }
  }
}
