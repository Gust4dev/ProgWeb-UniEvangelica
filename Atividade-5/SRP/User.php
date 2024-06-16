<?php
/*
* Curso de Engenharia de Software - UniEVANGÉLICA 
* Disciplina de Programação Web 
* Dev: Gustavo Gomes dos Santos
* 16/06/2024
*/

class User {
    public $id;
    public $name;
    public $email;
    public $password;

    public function __construct($id, $name, $email, $password) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }
}

class UserRepository {
    public function save(User $user) {
        // Salva o usuário no banco de dados
        // DB::table('users')->insert(...);
    }

    public function getAllUsers() {
        // Obtém todos os usuários do banco de dados
        // return DB::table('users')->get();
    }
}

class WelcomeEmailSender {
    public function sendWelcomeEmail(User $user) {
        // Envia email de boas-vindas
        // mail($user->email, "Welcome", "Thank you for registering!");
    }
}

class UserCSVExporter {
    public function exportToCSV($users) {
        $csv = "id,name,email\n";
        foreach ($users as $user) {
            $csv .= "{$user->id},{$user->name},{$user->email}\n";
        }
        file_put_contents('users.csv', $csv);
    }
}

// Usage
$user = new User(1, 'John Doe', 'john@example.com', 'secret');
$userRepository = new UserRepository();
$userRepository->save($user);

$emailSender = new WelcomeEmailSender();
$emailSender->sendWelcomeEmail($user);

$users = $userRepository->getAllUsers();
$csvExporter = new UserCSVExporter();
$csvExporter->exportToCSV($users);
?>
