pipeline {
  agent any
  stages {
    stage('Testing') {
      steps {
        sh 'echo "mvn test"'
      }
    }
    stage('Deployment'){
      steps{
        pushToCloudFoundry cloudSpace: 'development', credentialsId: '400bc3b2-2271-4016-9ce7-cdfb01121e3d', manifestChoice: [appName: 'monster-marketplace-copy', appPath: '', buildpack: '', command: '', domain: '', hostname: 'monster-marketplace-copy', instances: '1', memory: '512', noRoute: 'false', stack: '', timeout: '60', value: 'jenkinsConfig'], organization: 'Revature 0918', target: 'api.run.pivotal.io'
      }
    }
  }
}
