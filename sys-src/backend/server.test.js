const request = require('supertest')
const app = require('./server')

describe("Server Test", () => {

    describe("Testing Cocktailsroute", () => {

        test( "Able to get the Cocktails",async () => {
            const res = await request(app)
                .get("/api/v1/cocktailsmixer/cocktails/")

            expect(res.statusCode).toBe(200)
        })
    })

    describe('Testing Logoutroute', function () {
        test('try to logout an existing User', async () => {
            const response = await request(app)
                .post('/api/logout/')
                .send({
                    userid: "60de3f4df9a2bd49d849ea78"
                })

            let res = await JSON.parse(response.text);

            expect(res.success).toBe(true);
            expect(res.msg).toBe('logout successfull')
        })
    });

    describe("Testing Userroutes", () => {

        describe('test register routes', function () {

            test('try to register user which is already registered', async () => {
                const response = await request(app)
                    .post('/api/user/register')
                    .send({
                        username: "johnNEW_test",
                        password: "12345Hallo#",
                        passwordValidation: "12345Hallo#"
                    })

                let res = await JSON.parse(response.text);

                expect(res.success).toBe(false);
            })

            test('try to register user where password and passwordValidation is different', async () => {
                const response = await request(app)
                    .post('/api/user/register')
                    .send({
                        username: "john_test",
                        password: "12345Hallo#",
                        passwordValidation: "TestTest#"
                    })

                let res = await JSON.parse(response.text);

                expect(res.success).toBe(false);
            })

            test('try to register user where passwordlength is lower then 8 digits', async () => {
                const response = await request(app)
                    .post('/api/user/register')
                    .send({
                        username: "john_test",
                        password: "123456#",
                        passwordValidation: "123456#"
                    })

                let res = await JSON.parse(response.text);

                expect(res.success).toBe(false);
            })

            test('try to register user where password contains no special character', async () => {
                const response = await request(app)
                    .post('/api/user/register')
                    .send({
                        username: "john_test",
                        password: "12345678",
                        passwordValidation: "12345678"
                    })

                let res = await JSON.parse(response.text);

                expect(res.success).toBe(false);
            })
        });

        describe('test favouritesid route', function () {

            test("Try to get the IDs of all Cocktails with a existing User", async () => {
                const response = await request(app)
                    .get("/api/user/60de3f4df9a2bd49d849ea78/favouritesid/")

                let res = await JSON.parse(response.text);
                expect(response.statusCode).toBe(200)
                expect(res.success).toBe(true)
            })

            test("Try to get the IDs of all Cocktails with a non existing User", async () => {
                const response = await request(app)
                    .get("/api/user/999999999999999999999999/favouritesid/")

                let res = await JSON.parse(response.text);
                expect(response.statusCode).toBe(200)
                expect(res.success).toBe(false)
            })
        });

        describe('test favourites route', function () {

            test("loading FavouritesCocktail", async () => {
                const response = await request(app)
                    .get("/api/user/60de3f4df9a2bd49d849ea78/favourites")

                let res = await JSON.parse(response.text);
                expect(response.statusCode).toBe(200)
                expect(res.success).toBe(true)
            })

            test("try to load FavouritesCocktail with incorrect user", async () => {
                const response = await request(app)
                    .get("/api/user/999999999999999999999999/favourites")

                let res = await JSON.parse(response.text);
                expect(response.statusCode).toBe(200)
                expect(res.success).toBe(false)
                expect(res.msg).toBe("No user with given id found")
            })
        });

        describe('test setFavourite route', function () {

            test('try to set Favorite Cocktail on a non existing User', async () => {
                const response = await request(app)
                    .post('/api/user/setFavourite')
                    .send({
                        userid: "999999999999999999999999",
                        cocktail: "60c67f4688c88a1784f63f6a",
                    })

                let res = await JSON.parse(response.text);

                expect(res.success).toBe(false);
                expect(res.msg).toBe('No user with given id found')
            })

            test('try to set/remove Favorite Cocktail for an existing User. Attempt 1', async () => {
                const response = await request(app)
                    .post('/api/user/setFavourite')
                    .send({
                        userid: "60de3f4df9a2bd49d849ea78",
                        cocktail: "60bd22e28f4183529aad2d23"
                    })

                let res = await JSON.parse(response.text);
                expect(res.success).toBe(true);

                let isAddedOrDeleted = res.msg === 'added to Favourite' || res.msg === 'remove from Favourite';

                expect(isAddedOrDeleted).toBe(true)
            })

            test('try to set/remove Favorite Cocktail for an existing User. Attempt 2', async () => {
                const response = await request(app)
                    .post('/api/user/setFavourite')
                    .send({
                        userid: "60de3f4df9a2bd49d849ea78",
                        cocktail: "60bd22e28f4183529aad2d23"
                    })

                let res = await JSON.parse(response.text);
                expect(res.success).toBe(true);

                let isAddedOrDeleted = res.msg === 'added to Favourite' || res.msg === 'remove from Favourite';

                expect(isAddedOrDeleted).toBe(true)
            })
        });
    })

    describe('Testing Loginroutes', function () {

        describe('test isloggedin route', function () {
            test( "is user logged in with",async () => {

                const resp = await request(app)
                    .post('/api/login/')
                    .send({
                        username: "johnNEW_test",
                        password: "12345Hallo#"
                    })

                const response = await request(app)
                    .get("/api/login/60de3f4df9a2bd49d849ea78")

                let res = await JSON.parse(response.text);

                expect(response.statusCode).toBe(200)
                expect(res.success).toBe(true);
                expect(typeof res.username).toBe('string')
            })
        });

        describe('test login route', function () {

            test('', async () => {
                const response = await request(app)
                    .post('/api/login/')
                    .send({
                        username: "johnNEW_test",
                        password: "12345Hallo#",
                    })

                expect(response.statusCode).toBe(200)

                let res = await JSON.parse(response.text);
                expect(res.success).toBe(true);
                expect(typeof res.id).toBe('string')
            });

            test('', async () => {
                const response = await request(app)
                    .post('/api/login/')
                    .send({
                        username: "johnNEW_test",
                        password: "123456789!",
                    })

                expect(response.statusCode).toBe(200)

                let res = await JSON.parse(response.text);
                expect(res.success).toBe(false);
                expect(res.msg).toBe("Falscher Benutzername oder Passwort");
            });
        });
    });
})