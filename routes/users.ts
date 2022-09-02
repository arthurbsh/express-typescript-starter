import {Router} from 'express';

const router = Router(); // "/users"

type User = {
  name: string,
  email: string,
  age: number,
  id: number
}

const allUsers: Array<User>= []

router.get('/', function(req, res) {
  //get something from database
  res.send(allUsers);
});

router.get('/:id', function(req, res) {
  //get something from database
  const user = allUsers.find((item) => {return item.id === parseInt(req.params.id)});

  if (user) {
    res.send(user);
  } else {
    res.statusCode = 404;
    res.send({message: "User not found"})
  }
});

//create user
router.post('/', (req, res) => {
  const user = req.body ;
  user.id = allUsers.length;
  allUsers.push(user);
  res.send({"message": `User ${user.id} was added`});
})

export default router;