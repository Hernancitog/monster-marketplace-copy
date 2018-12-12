pipeline {
  agent any
  stages {
    stage('Packaging') {
      agent {
        docker {
          image 'maven:3-alpine'
          args '-v /root/.m2:/root/.m2'
        }

      }
      steps {
        sh 'mvn -DskipTests clean package'
      }
    }
    stage('Testing') {
      steps {
        sh 'echo "mvn test"'
      }
    }
    stage('Deployment') {
      steps {
        pushToCloudFoundry(cloudSpace: 'development', credentialsId: '400bc3b2-2271-4016-9ce7-cdfb01121e3d', organization: 'Revature 0918', target: 'api.run.pivotal.io')
      }
    }
  }
}