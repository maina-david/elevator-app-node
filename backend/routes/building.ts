import express from 'express'
import { validateBuildingFields } from '../middleware/validateBuildingFields'
import { createBuilding, createElevatorForBuilding } from '../controllers/BuildingController'
import { authenticateJWT } from '../middleware/authMiddleware'
import { validateElevatorFields } from '../middleware/validateElevatorFields'

const router = express.Router()

router.post('/create-building', authenticateJWT, validateBuildingFields, createBuilding)
router.post('/create-elevator', authenticateJWT, validateElevatorFields, createElevatorForBuilding)

export default router
