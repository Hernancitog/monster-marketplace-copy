pipeline {
  environment {
    registry = "citopues/dockrep"
    registryCredential = 'dockerhub'
  }
  agent any
  
  stages {
    
    stage('Testing') {
      when {
        anyOf {
          branch 'master'
        }
      }
      steps {
        sh 'echo "mvn test"'
      }
    }
    
    stage('Packaging') {
      when {
        anyOf {
          branch 'master'
        }
      }
      agent {
        docker {
            image 'maven:3-alpine'
            args '-v /root/.m2:/root/.m2'
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
    
    stage('Building Container') {
      when {
        anyOf {
          branch 'master'
        }
      }
      agent {
        dockerfile true
      }
      steps{
        sh "echo run docker build"
        // mvn dockerfile:build@${env.DK_TAG_GOAL}
        // def customImage = docker.build("my-image:tag-latest")
        // sh "mvn dockerfile:tag-latest"
        // def customImage = docker.build("my-image:latest")
        def testImage = docker.build("test-image", "./dockerfiles/test")
        testImage.inside {
          sh 'make test'
        }
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
