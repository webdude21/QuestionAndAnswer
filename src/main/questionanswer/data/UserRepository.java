package questionanswer.data;

import org.springframework.data.repository.CrudRepository;

import questionanswer.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
