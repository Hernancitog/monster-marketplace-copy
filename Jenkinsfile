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
    
    stage('Container Build') {
      when {
        anyOf {
          branch 'master'
        }
      }
      //agent {
      //  dockerfile true
      //}
      steps {
        script {
          sh "echo run docker build"
          // mvn dockerfile:build@${env.DK_TAG_GOAL}
          // def customImage = docker.build("my-image:tag-latest")
          // sh "mvn dockerfile:tag-latest"
          // def customImage = docker.build("my-image:latest")
          def testImage = docker.build("test-image")
        }
      }
    }
    
    stage('Container Push') {
      when {
        anyOf {
          branch 'master'
        }
      }
      steps {
        script {
          try {
            // sh "echo push; mvn dockerfile:push"
            sh "echo push; testImage.push('latest')"
            // sh "echo remove local image; docker image rm ${env.DK_U}/${env.IMG_NAME}:${env.DK_TAG}"
          } catch(Exception e) {
            throw e
          }
        }
      }
    }
    
    stage('CF Push') {
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
