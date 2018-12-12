pipeline {
  agent any
  stages {
    stage('Packaging'){
      steps{
        sh 'mvn -B -DskipTests clean package'
      }
    }
    stage('Testing') {
      steps {
        sh 'echo "mvn test"'
      }
    }
    stage('Deployment'){
      steps{
        pushToCloudFoundry cloudSpace: 'development', credentialsId: '400bc3b2-2271-4016-9ce7-cdfb01121e3d', organization: 'Revature 0918', target: 'api.run.pivotal.io'
      }
    }
  }
}
