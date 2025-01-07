from Database import DatabaseDriver

class AccountDB(DatabaseDriver):
    def __init__(self, collection):
        super().__init__(collection)

    