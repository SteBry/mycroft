from django.test import TestCase
from unittest.mock import patch

# Import module
from backend.video_manager import *


class GetClipInfoTest(TestCase):

    @patch('backend.video_manager.serialize')
    @patch('backend.video_manager.get_clip_by_id')
    def test_basic(self, mock_get_clip_by_id, mock_serialize):
        """
        Makes a simple call.
        """
        mock_get_clip_by_id.return_value = "RETURNED CLIP"
        code, res = get_clip_info(data={CLIP_ID: 42})
        mock_get_clip_by_id.assert_called_once_with(cid=42)
        mock_serialize.assert_called_once_with("RETURNED CLIP")
        self.assertEqual(code, 200)

    def test_missing_parameter(self):
        """
        Test with a missing parameter.
        """
        code, res = get_clip_info(data={FOLDER_ID: 42})
        self.assertEqual(code, 400)
        self.assertEqual(res, {})


class GetCamerasTest(TestCase):

    @patch('backend.video_manager.os_aware')
    @patch('backend.video_manager.serialize')
    @patch('backend.video_manager.get_all_cameras_in_project')
    def test_basic(self, mock_get_all_cameras_in_project, mock_serialize, mock_os_aware):
        """
        Makes a simple call.
        """
        mock_get_all_cameras_in_project.return_value = "RETURNED CAMERAS"
        mock_serialize.return_value = 'RETURN FROM SERIALIZE'
        code, res = get_cameras(data={PROJECT_ID: 42})
        mock_get_all_cameras_in_project.assert_called_once_with(pid=42)
        mock_serialize.assert_called_once_with("RETURNED CAMERAS")
        mock_os_aware.assert_called_once_with({CAMERAS: 'RETURN FROM SERIALIZE'})
        self.assertEqual(code, 200)

    def test_missing_parameter(self):
        """
        Test with a missing parameter.
        """
        code, res = get_cameras(data={FOLDER_ID: 42})
        self.assertEqual(code, 400)
        self.assertEqual(res, {})
