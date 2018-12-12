pipeline {
  agent {
    docker {
      image 'maven:3-alpine'
      args '-v /root/.m2:/root/.m2'
    }

  }
  stages {
    stage('Packaging') {
      when {
        anyOf {
          branch 'master'
        }

      }
      steps {
        script {
          try {
            sh 'echo run mvn package -DskipTests'
            sh 'mvn install -DskipTests'
          } catch(Exception e) {
            throw e
          }
        }

      }
    }
    stage('Testing') {
      when {
        anyOf {
          branch 'master'
        }

      }
      steps {
        sh '''echo "mvn test"
mvn test'''
      }
    }
    stage('Deployment') {
      when {
        anyOf {
          branch 'master'
        }

      }
      steps {
        pushToCloudFoundry(cloudSpace: 'development', credentialsId: '400bc3b2-2271-4016-9ce7-cdfb01121e3d', organization: 'Revature 0918', target: 'api.run.pivotal.io')
      }
    }
  }
}