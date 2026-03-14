pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.58.2-noble'
        }
    }
    stages {
        stage('Instalando playwright...') {
            steps {
                sh '''
            npm i -D @playwright/test
            npx playwright install
            '''
            }
        }
        stage('Ejecutando pruebas') {
            steps {
                sh '''
            npx playwright test --list
            npx playwright test
            '''
            }
        }
    }
}
