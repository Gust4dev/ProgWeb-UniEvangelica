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

interface UserRepositoryInterface {
    public function save(User $user);
    public function getAllUsers();
}

interface UserExporter {
    public function export($users);
}

class UserRepository implements UserRepositoryInterface {
    public function save(User $user) {
        // Salva o usuário no banco de dados
        // DB::table('users')->insert(...);
    }

    public function getAllUsers() {
        // Obtém todos os usuários do banco de dados
        // return DB::table('users')->get();
    }
}

class UserCSVExporter implements UserExporter {
    public function export($users) {
        $csv = "id,name,email\n";
        foreach ($users as $user) {
            $csv .= "{$user->id},{$user->name},{$user->email}\n";
        }
        file_put_contents('users.csv', $csv);
    }
}

class UserService {
    private $userRepository;
    private $userExporter;

    public function __construct(UserRepositoryInterface $userRepository, UserExporter $userExporter) {
        $this->userRepository = $userRepository;
        $this->userExporter = $userExporter;
    }

    public function saveUser(User $user) {
        $this->userRepository->save($user);
    }

    public function exportUsers() {
        $users = $this->userRepository->getAllUsers();
        $this->userExporter->export($users);
    }
}

// Usage
$user = new User(1, 'John Doe', 'john@example.com', 'secret');
$userRepository = new UserRepository();
$userCSVExporter = new UserCSVExporter();

$userService = new UserService($userRepository, $userCSVExporter);
$userService->saveUser($user);
$userService->exportUsers();
?>
