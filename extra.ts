
function funcy(arg: any) {

}







//* ------------------- Discriminated Unions -------------------

interface Robot {
    model: string,
    type: string
    battery: number
}

enum RobotActionType {
    SET_ROBOTS = 'SET_ROBOTS',
    REMOVE_ROBOT = 'REMOVE_ROBOT',
}

interface SetRobotsAction {
    type: RobotActionType.SET_ROBOTS,
    robots: Robot[]
}

interface RemoveRobotAction {
    type: RobotActionType.REMOVE_ROBOT,
    robotId: string
}

type RobotAction = SetRobotsAction | RemoveRobotAction

function reducer(action: RobotAction) {

    switch (action.type) {
        case RobotActionType.SET_ROBOTS:
            action.robots
            break;
        case RobotActionType.REMOVE_ROBOT:
            action.robotId
            break;
    }
}








const getItems = async (arg: string) => ''








