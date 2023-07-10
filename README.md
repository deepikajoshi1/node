# node
# In case MongoDb stops
1. To check which container is running:
```
docker ps -a
```
2. To restart a stopped container:
```
docker restart <container_id_from_previous_step>
docker restart c13dc65afsds
```
# For delating data in mongo db:
1.  Install a mongo shell:
```
brew install mongosh
```
2. Connect to mongo running in docker from command prompt/ terminal(1 Connect to Mongo DB):
```
mongosh "mongodb://localhost:27017"
```
3. After connecting with mongosh, a shell will open and you would be connected with mongo db in default test database
4. See what all databases are there:
```
 show dbs
 ```

3. Switch to your database, in this case your db name is users:
```
use users
```

4. You can now view records in your collection, using:
```
db.users.find()
```
5. In order to delete all data from users collection (Truncate)
```
db.users.remove({})
```
