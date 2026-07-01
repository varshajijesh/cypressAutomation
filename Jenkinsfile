pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }

        stage('Merge Reports & Generate HTML') {
            steps {
                sh 'npm run merge:reports'
                sh 'npm run report:html'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**/*', fingerprint: true
        }
    }
}
